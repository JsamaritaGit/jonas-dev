export const dynamic = "force-dynamic";

const POKEAPI = "https://pokeapi.co/api/v2";

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

// GET /api/pokemon/random
// Returns a random Pokémon's sprite + a few basics, proxied from PokeAPI.
export async function GET() {
  try {
    // 1) Random ID 1–1025, 2) fetch that Pokémon's info from PokéAPI.
    const id = Math.floor(Math.random() * MAX_ID) + 1;
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
      sprite: pickSprite(pokemon.sprites),
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
