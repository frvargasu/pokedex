import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'
import './PokemonList.css'

const PokemonList = ({ pokemon, selectedGeneration }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pokemonPerPage = 20

  // Reset página cuando cambie la generación o el filtro
  useEffect(() => {
    setCurrentPage(1)
  }, [pokemon])

  const getGenerationName = (genId) => {
    const names = {
      'all': 'Todas las Generaciones',
      1: 'Primera Generación (Kanto)',
      2: 'Segunda Generación (Johto)',
      3: 'Tercera Generación (Hoenn)',
      4: 'Cuarta Generación (Sinnoh)',
      5: 'Quinta Generación (Unova)',
      6: 'Sexta Generación (Kalos)',
      7: 'Séptima Generación (Alola)',
      8: 'Octava Generación (Galar)',
      9: 'Novena Generación (Paldea)'
    }
    return names[genId] || 'Generación Desconocida'
  }

  // Calcular los índices para la paginación
  const indexOfLastPokemon = currentPage * pokemonPerPage
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage
  const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon)

  // Calcular el número total de páginas
  const totalPages = Math.ceil(pokemon.length / pokemonPerPage)

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll al top cuando cambie la página
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1)
    }
  }

  // Generar números de página para mostrar
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2))
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
    
    // Ajustar el inicio si estamos cerca del final
    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1)
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }
    
    return pageNumbers
  }

  if (pokemon.length === 0) {
    return (
      <div className="no-pokemon">
        <p>No se encontraron Pokémon que coincidan con tu búsqueda en {getGenerationName(selectedGeneration)}.</p>
      </div>
    )
  }

  return (
    <div className="pokemon-list-container">
      <div className="pokemon-results-info">
        <p>
          <strong>{getGenerationName(selectedGeneration)}</strong>
        </p>
        <p>
          Mostrando {indexOfFirstPokemon + 1}-{Math.min(indexOfLastPokemon, pokemon.length)} de {pokemon.length} Pokémon
        </p>
      </div>

      <div className="pokemon-grid">
        {currentPokemon.map((poke) => (
          <PokemonCard key={poke.id} pokemon={poke} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button 
            className="pagination-btn"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            ← Anterior
          </button>

          <div className="page-numbers">
            {currentPage > 3 && (
              <>
                <button 
                  className="page-number"
                  onClick={() => handlePageChange(1)}
                >
                  1
                </button>
                {currentPage > 4 && <span className="ellipsis">...</span>}
              </>
            )}

            {getPageNumbers().map(number => (
              <button
                key={number}
                className={`page-number ${number === currentPage ? 'active' : ''}`}
                onClick={() => handlePageChange(number)}
              >
                {number}
              </button>
            ))}

            {currentPage < totalPages - 2 && (
              <>
                {currentPage < totalPages - 3 && <span className="ellipsis">...</span>}
                <button 
                  className="page-number"
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </button>
              </>
            )}
          </div>

          <button 
            className="pagination-btn"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  )
}

export default PokemonList
