export const dynamic = "force-dynamic";

const POKEAPI = "https://pokeapi.co/api/v2";
const POKEAPIGENII   = "https://raw.githubusercontent.com/PokeAPI/sprites";

// Prefer the highest-resolution sprite available, falling back to the
// standard front sprite so an image always exists.
function pickSprite(sprites) {
  return (
    sprites?.other?.["official-artwork"]?.front_default ||
    sprites?.other?.home?.front_default ||
    sprites?.front_default ||
    null
  );
}

// GET /api/pokemon/:id  (id can be a dex number or a name)
// Returns trimmed details for one Pokémon, proxied from PokeAPI.
export async function GET(_request, { params }) {
  const { id } = await params;

  try {
    const res = await fetch(`${POKEAPI}/pokemon/${id}`, { cache: "no-store" });
    const gen2res = await fetch(`${POKEAPIGENII}/master/sprites/pokemon/versions/generation-ii/crystal/${id}.png`, { cache: "no-store" });

    if (gen2res.status === 404) {
      return Response.json(
        { error: `No Pokémon found for "${id}".` },
        { status: 404 }
      );
    }
    if (!gen2res.ok) {
      throw new Error(`PokeAPI request failed: ${gen2res.status}`);
    }

    const pokemon = await res.json();

    return Response.json({
      id: pokemon.id,
      name: pokemon.name,
      sprite: pickSprite(pokemon.sprites),
      spriteShiny: pokemon.sprites?.front_shiny || null,
      height: pokemon.height, // decimetres
      weight: pokemon.weight, // hectograms
      baseExperience: pokemon.base_experience,
      types: pokemon.types.map((t) => t.type.name),
      abilities: pokemon.abilities.map((a) => ({
        name: a.ability.name,
        isHidden: a.is_hidden,
      })),
      stats: pokemon.stats.map((s) => ({
        name: s.stat.name,
        base: s.base_stat,
      })),
    });
  } catch (err) {
    console.error(`[/api/pokemon/${id}]`, err);
    
    return Response.json(
      { error: "Could not load Pokémon details. Please try again." },
      { status: 502 }
    );
  }
}
