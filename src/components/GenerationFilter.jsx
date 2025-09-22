import React from 'react'
import './GenerationFilter.css'

const GenerationFilter = ({ selectedGeneration, onGenerationChange, pokemonCounts }) => {
  const generations = [
    { id: 'all', name: 'Todas las Generaciones', range: 'Completa' },
    { id: 1, name: 'Primera Generación', range: 'Kanto (1-151)' },
    { id: 2, name: 'Segunda Generación', range: 'Johto (152-251)' },
    { id: 3, name: 'Tercera Generación', range: 'Hoenn (252-386)' },
    { id: 4, name: 'Cuarta Generación', range: 'Sinnoh (387-493)' },
    { id: 5, name: 'Quinta Generación', range: 'Unova (494-649)' },
    { id: 6, name: 'Sexta Generación', range: 'Kalos (650-721)' },
    { id: 7, name: 'Séptima Generación', range: 'Alola (722-809)' },
    { id: 8, name: 'Octava Generación', range: 'Galar (810-905)' },
    { id: 9, name: 'Novena Generación', range: 'Paldea (906+)' }
  ]

  const getGenerationCount = (genId) => {
    if (genId === 'all') return pokemonCounts.total || 0
    return pokemonCounts[genId] || 0
  }

  return (
    <div className="generation-filter">
      <h3>Filtrar por Generación</h3>
      <div className="generation-buttons">
        {generations.map((gen) => (
          <button
            key={gen.id}
            className={`generation-btn ${selectedGeneration === gen.id ? 'active' : ''}`}
            onClick={() => onGenerationChange(gen.id)}
          >
            <div className="generation-info">
              <span className="generation-name">{gen.name}</span>
              <span className="generation-range">{gen.range}</span>
              <span className="generation-count">
                {getGenerationCount(gen.id)} Pokémon
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default GenerationFilter
