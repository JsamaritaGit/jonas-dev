export const dynamic = "force-dynamic";

const POKEAPI = "https://pokeapi.co/api/v2";
const POKEAPIGENII = "https://raw.githubusercontent.com/PokeAPI/sprites";

// National Pokédex currently spans ids 1–1025 (Gen I–IX); every id in that
// range is a real Pokémon with official artwork.
const MAX_ID = 1025;

// Prefer the highest-resolution sprite available (official artwork / home),
// falling back to the standard front sprite so an image always exists.
function pickSprite(sprites) {
  return (
    sprites?.other?.["official-artwork"]?.front_default ||
    sprites?.other?.home?.front_default ||
    sprites?.front_default ||
    null
  );
}

// Gen II sprites ship on an opaque white square. Any pixel this bright on all
// channels (and only that) is treated as background white — dark outlines and
// coloured art are untouched, and near-white pixels are never fully removed.
const BG_WHITE = 244;

// Fetches a Gen II Crystal sprite and returns it as a PNG data URI with the
// white background made transparent. Two passes keep it clean:
//   1) Flood-fill from the image edges to remove the outer white background —
//      enclosed white details (bellies, eyes, highlights) are left intact.
//   2) Peel any remaining near-white fringe touching the transparent area so
//      the anti-aliased halo around the outline disappears.
// Returns null when the sprite can't be fetched or processed (caller falls
// back to the official artwork, which is already transparent).
async function gen2SpriteTransparent(id) {
  try {
    const res = await fetch(
      `${POKEAPIGENII}/master/sprites/pokemon/versions/generation-ii/crystal/${id}.png`,
      { cache: "no-store" }
    );
    if (!res.ok) return null;

    const { default: sharp } = await import("sharp");
    const buf = Buffer.from(await res.arrayBuffer());
    // ensureAlpha -> guaranteed RGBA so pixels are indexed as i * 4.
    const { data, info } = await sharp(buf)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });
    const w = info.width;
    const h = info.height;

    const isWhite = (o) =>
      data[o] >= BG_WHITE && data[o + 1] >= BG_WHITE && data[o + 2] >= BG_WHITE;

    // 1) Flood fill near-white from the border -> mark for removal.
    const remove = new Uint8Array(w * h);
    const stack = [];
    const seed = (i) => {
      if (!remove[i] && isWhite(i * 4)) {
        remove[i] = 1;
        stack.push(i);
      }
    };
    for (let x = 0; x < w; x++) {
      seed(x);
      seed((h - 1) * w + x);
    }
    for (let y = 0; y < h; y++) {
      seed(y * w);
      seed(y * w + w - 1);
    }
    while (stack.length) {
      const i = stack.pop();
      const x = i % w;
      const y = (i / w) | 0;
      for (const [dx, dy] of [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < w && ny < h) seed(ny * w + nx);
      }
    }

    // 2) Peel the white fringe adjacent to transparency (a few pixels deep),
    //    stopping once a pass changes nothing.
    for (let pass = 0; pass < 6; pass++) {
      let changed = false;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const i = y * w + x;
          if (remove[i] || !isWhite(i * 4)) continue;
          const touches = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
          ].some(([dx, dy]) => {
            const nx = x + dx;
            const ny = y + dy;
            return nx >= 0 && ny >= 0 && nx < w && ny < h && remove[ny * w + nx];
          });
          if (touches) {
            remove[i] = 1;
            changed = true;
          }
        }
      }
      if (!changed) break;
    }

    // Copy the RGBA pixels and drop the alpha on removed background pixels.
    const out = Buffer.alloc(w * h * 4);
    data.copy(out);
    for (let i = 0; i < w * h; i++) {
      if (remove[i]) out[i * 4 + 3] = 0;
    }

    const png = await sharp(out, {
      raw: { width: w, height: h, channels: 4 },
    })
      .png({ compressionLevel: 9 })
      .toBuffer();
    return `data:image/png;base64,${png.toString("base64")}`;
  } catch (err) {
    console.error("[/api/pokemon/random] background removal failed", err);
    return null;
  }
}


// GET /api/pokemon/random
// Returns a random Pokémon's sprite + a few basics, proxied from PokeAPI.
// Gen II sprites get their white background stripped before being returned.
export async function GET() {
  try {
    // 1) Random Gen II id (152–251) with the white background removed.
    const id = Math.floor(Math.random() * 100) + 152;
    const gen2Sprite = await gen2SpriteTransparent(id);
    // 2) Fetch that Pokémon's info from PokéAPI.
    const pokemonRes = await fetch(`${POKEAPI}/pokemon/${id}`, {
      cache: "no-store",
    });
    if (!pokemonRes.ok) {
      throw new Error(`PokeAPI pokemon request failed: ${pokemonRes.status}`);
    }
    const pokemon = await pokemonRes.json();

    return Response.json({
      id: pokemon.id,
      name: pokemon.name,
      sprite: gen2Sprite || pickSprite(pokemon.sprites),
      types: pokemon.types.map((t) => t.type.name),
    });
  } catch (err) {
    console.error("[/api/pokemon/random]", err);
    return Response.json(
      { error: "Could not catch a random Pokémon. Please try again." },
      { status: 502 }
    );
  }
}
