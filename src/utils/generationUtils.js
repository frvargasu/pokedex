// Función para determinar la generación de un Pokémon basado en su ID
export const getPokemonGeneration = (pokemonId) => {
  if (pokemonId >= 1 && pokemonId <= 151) return 1      // Kanto
  if (pokemonId >= 152 && pokemonId <= 251) return 2    // Johto
  if (pokemonId >= 252 && pokemonId <= 386) return 3    // Hoenn
  if (pokemonId >= 387 && pokemonId <= 493) return 4    // Sinnoh
  if (pokemonId >= 494 && pokemonId <= 649) return 5    // Unova
  if (pokemonId >= 650 && pokemonId <= 721) return 6    // Kalos
  if (pokemonId >= 722 && pokemonId <= 809) return 7    // Alola
  if (pokemonId >= 810 && pokemonId <= 905) return 8    // Galar
  if (pokemonId >= 906) return 9                        // Paldea
  return 1 // Default a primera generación si no se puede determinar
}

// Función para filtrar Pokémon por generación
export const filterPokemonByGeneration = (pokemon, generation) => {
  if (generation === 'all') return pokemon
  
  return pokemon.filter(poke => getPokemonGeneration(poke.id) === generation)
}

// Función para contar Pokémon por generación
export const countPokemonByGeneration = (pokemon) => {
  const counts = {
    total: pokemon.length,
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0
  }
  
  pokemon.forEach(poke => {
    const gen = getPokemonGeneration(poke.id)
    if (counts[gen] !== undefined) {
      counts[gen]++
    }
  })
  
  return counts
}

// Información detallada de cada generación
export const generationInfo = {
  1: { name: 'Kanto', region: 'Kanto', games: ['Red', 'Blue', 'Yellow'] },
  2: { name: 'Johto', region: 'Johto', games: ['Gold', 'Silver', 'Crystal'] },
  3: { name: 'Hoenn', region: 'Hoenn', games: ['Ruby', 'Sapphire', 'Emerald'] },
  4: { name: 'Sinnoh', region: 'Sinnoh', games: ['Diamond', 'Pearl', 'Platinum'] },
  5: { name: 'Unova', region: 'Unova', games: ['Black', 'White', 'Black 2', 'White 2'] },
  6: { name: 'Kalos', region: 'Kalos', games: ['X', 'Y'] },
  7: { name: 'Alola', region: 'Alola', games: ['Sun', 'Moon', 'Ultra Sun', 'Ultra Moon'] },
  8: { name: 'Galar', region: 'Galar', games: ['Sword', 'Shield'] },
  9: { name: 'Paldea', region: 'Paldea', games: ['Scarlet', 'Violet'] }
}
