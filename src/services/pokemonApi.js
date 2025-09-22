import axios from 'axios'

const API_BASE_URL = 'https://pokeapi.co/api/v2'

// Obtener lista básica de Pokémon
export const getPokemonList = async (limit = 151, offset = 0) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokemon list:', error)
    throw error
  }
}

// Obtener detalles de un Pokémon específico
export const getPokemonDetails = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokemon details:', error)
    throw error
  }
}

// Obtener Pokémon por nombre o ID
export const getPokemonByName = async (nameOrId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${nameOrId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching Pokemon by name:', error)
    throw error
  }
}

// Obtener todos los Pokémon con detalles completos
export const getAllPokemon = async (limit = 1010) => {
  try {
    // Primero obtenemos la lista básica (actualmente hay más de 1000 Pokémon)
    const pokemonList = await getPokemonList(limit)
    
    // Luego obtenemos los detalles de cada Pokémon
    const pokemonDetailsPromises = pokemonList.results.map(pokemon => 
      getPokemonDetails(pokemon.url)
    )
    
    const pokemonDetails = await Promise.all(pokemonDetailsPromises)
    return pokemonDetails
  } catch (error) {
    console.error('Error fetching all Pokemon:', error)
    throw error
  }
}

// Obtener Pokémon por lotes para mejor rendimiento
export const getAllPokemonBatched = async (totalLimit = 1010, batchSize = 50) => {
  try {
    let allPokemon = []
    
    for (let offset = 0; offset < totalLimit; offset += batchSize) {
      const currentBatchSize = Math.min(batchSize, totalLimit - offset)
      const pokemonList = await getPokemonList(currentBatchSize, offset)
      
      const pokemonDetailsPromises = pokemonList.results.map(pokemon => 
        getPokemonDetails(pokemon.url)
      )
      
      const pokemonDetails = await Promise.all(pokemonDetailsPromises)
      allPokemon = [...allPokemon, ...pokemonDetails]
      
      // Pequeña pausa para no sobrecargar la API
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    
    return allPokemon
  } catch (error) {
    console.error('Error fetching Pokemon in batches:', error)
    throw error
  }
}

// Obtener tipos de Pokémon
export const getPokemonTypes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/type`)
    return response.data.results
  } catch (error) {
    console.error('Error fetching Pokemon types:', error)
    throw error
  }
}

// Obtener Pokémon por tipo
export const getPokemonByType = async (type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/type/${type}`)
    return response.data.pokemon.map(p => p.pokemon)
  } catch (error) {
    console.error('Error fetching Pokemon by type:', error)
    throw error
  }
}
