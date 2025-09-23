import React from 'react'
import './TeamViewer.css'

const TeamViewer = ({ team, isOpen, onClose, onRemoveFromTeam, translateType, translateAbility }) => {
  const formatPokemonId = (id) => {
    return `#${id.toString().padStart(3, '0')}`
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const getTypeColor = (type) => {
    const colors = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC'
    }
    return colors[type] || '#68A090'
  }

  if (!isOpen) return null

  return (
    <div className="team-modal-overlay" onClick={onClose}>
      <div className="team-modal" onClick={(e) => e.stopPropagation()}>
        <div className="team-header">
          <h2>🎮 Tu Equipo Pokémon</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        
        <div className="team-info">
          <p>{team.length}/6 Pokémon en tu equipo</p>
          {team.length === 6 && (
            <p className="team-complete">¡Equipo completo! 🎉</p>
          )}
        </div>

        <div className="team-grid">
          {/* Slots del equipo */}
          {[...Array(6)].map((_, index) => {
            const pokemon = team[index]
            
            return (
              <div key={index} className={`team-slot ${pokemon ? 'occupied' : 'empty'}`}>
                {pokemon ? (
                  <div className="team-pokemon">
                    <div className="pokemon-header">
                      <span className="pokemon-id">{formatPokemonId(pokemon.id)}</span>
                      <button 
                        className="remove-btn"
                        onClick={() => onRemoveFromTeam(pokemon)}
                        title="Quitar del equipo"
                      >
                        ✕
                      </button>
                    </div>
                    
                    <img
                      src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
                      alt={pokemon.name}
                      className="team-pokemon-image"
                    />
                    
                    <h4 className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</h4>
                    
                    <div className="pokemon-types">
                      {pokemon.types.map((typeInfo, typeIndex) => (
                        <span
                          key={typeIndex}
                          className="pokemon-type"
                          style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
                        >
                          {translateType(typeInfo.type.name)}
                        </span>
                      ))}
                    </div>

                    <div className="pokemon-main-ability">
                      <span className="ability-label">Habilidad:</span>
                      <span className="ability-name">
                        {translateAbility(pokemon.abilities[0]?.ability.name)}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="empty-slot">
                    <div className="empty-pokeball">⚪</div>
                    <p>Slot vacío</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {team.length === 0 && (
          <div className="empty-team">
            <p>Tu equipo está vacío</p>
            <p>¡Agrega Pokémon usando el botón ⭐ en las tarjetas!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default TeamViewer
