import { useState, useEffect } from 'react'

const useTeamManager = (allPokemon) => {
  const [favorites, setFavorites] = useState([])
  const [team, setTeam] = useState([])

  // Cargar datos del localStorage al iniciar
  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('pokemon-favorites') || '[]')
    const savedTeam = JSON.parse(localStorage.getItem('pokemon-team') || '[]')
    setFavorites(savedFavorites)
    setTeam(savedTeam)
  }, [])

  // Guardar favoritos en localStorage
  const saveFavorites = (newFavorites) => {
    setFavorites(newFavorites)
    localStorage.setItem('pokemon-favorites', JSON.stringify(newFavorites))
  }

  // Guardar equipo en localStorage
  const saveTeam = (newTeam) => {
    setTeam(newTeam)
    localStorage.setItem('pokemon-team', JSON.stringify(newTeam))
  }

  // Alternar favorito
  const toggleFavorite = (pokemon) => {
    const newFavorites = favorites.some(fav => fav.id === pokemon.id)
      ? favorites.filter(fav => fav.id !== pokemon.id)
      : [...favorites, pokemon]
    saveFavorites(newFavorites)
  }

  // Añadir/quitar del equipo
  const toggleTeamMember = (pokemon) => {
    const isInTeam = team.some(member => member.id === pokemon.id)
    
    if (isInTeam) {
      // Quitar del equipo
      const newTeam = team.filter(member => member.id !== pokemon.id)
      saveTeam(newTeam)
    } else if (team.length < 6) {
      // Añadir al equipo (máximo 6)
      const newTeam = [...team, pokemon]
      saveTeam(newTeam)
    }
  }

  const isFavorite = (pokemonId) => favorites.some(fav => fav.id === pokemonId)
  const isInTeam = (pokemonId) => team.some(member => member.id === pokemonId)

  const getFavoritePokemons = () => {
    return allPokemon.filter(pokemon => isFavorite(pokemon.id))
  }

  const clearTeam = () => {
    saveTeam([])
  }

  const clearFavorites = () => {
    saveFavorites([])
  }

  return {
    favorites,
    team,
    toggleFavorite,
    toggleTeamMember,
    isFavorite,
    isInTeam,
    getFavoritePokemons,
    clearTeam,
    clearFavorites
  }
}

export default useTeamManager
