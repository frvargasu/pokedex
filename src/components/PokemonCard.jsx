import React from 'react'
import './PokemonCard.css'

const PokemonCard = ({ pokemon, onToggleFavorite, onToggleTeam, isFavorite, isInTeam, canAddToTeam }) => {
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

  const translateType = (type) => {
    const translations = {
      normal: 'Normal',
      fire: 'Fuego',
      water: 'Agua',
      electric: 'Eléctrico',
      grass: 'Planta',
      ice: 'Hielo',
      fighting: 'Lucha',
      poison: 'Veneno',
      ground: 'Tierra',
      flying: 'Volador',
      psychic: 'Psíquico',
      bug: 'Bicho',
      rock: 'Roca',
      ghost: 'Fantasma',
      dragon: 'Dragón',
      dark: 'Siniestro',
      steel: 'Acero',
      fairy: 'Hada'
    }
    return translations[type] || capitalizeFirstLetter(type)
  }

  const translateAbility = (ability) => {
    const abilityTranslations = {
      'overgrow': 'Espesura',
      'chlorophyll': 'Clorofila',
      'blaze': 'Mar Llamas',
      'solar-power': 'Poder Solar',
      'torrent': 'Torrente',
      'rain-dish': 'Cura Lluvia',
      'shield-dust': 'Polvo Escudo',
      'run-away': 'Fuga',
      'shed-skin': 'Mudar',
      'adaptability': 'Adaptabilidad',
      'limber': 'Flexibilidad',
      'imposter': 'Impostor',
      'keen-eye': 'Vista Lince',
      'tangled-feet': 'Pies Enredo',
      'big-pecks': 'Sacapecho',
      'guts': 'Agallas',
      'hustle': 'Entusiasmo',
      'inner-focus': 'Foco Interno',
      'intimidate': 'Intimidación',
      'hyper-cutter': 'Hiper Corte',
      'shell-armor': 'Caparazón',
      'sand-veil': 'Velo Arena',
      'static': 'Electricidad Estática',
      'lightning-rod': 'Pararrayos',
      'sturdy': 'Robustez',
      'rock-head': 'Cabeza Roca',
      'magnet-pull': 'Magnetismo',
      'soundproof': 'Insonorizar',
      'swift-swim': 'Nado Rápido',
      'water-absorb': 'Absorbe Agua',
      'oblivious': 'Despiste',
      'cloud-nine': 'Aclimatación',
      'compound-eyes': 'Ojo Compuesto',
      'insomnia': 'Insomnio',
      'color-change': 'Cambio Color',
      'immunity': 'Inmunidad',
      'flash-fire': 'Absorbe Fuego',
      'shield-dust': 'Polvo Escudo',
      'own-tempo': 'Ritmo Propio',
      'suction-cups': 'Ventosas',
      'clear-body': 'Cuerpo Puro',
      'natural-cure': 'Cura Natural',
      'serene-grace': 'Dicha',
      'swift-swim': 'Nado Rápido',
      'chlorophyll': 'Clorofila',
      'illuminate': 'Iluminación',
      'trace': 'Calco',
      'huge-power': 'Potencia',
      'poison-point': 'Punto Tóxico',
      'inner-focus': 'Foco Interno',
      'flame-body': 'Cuerpo Llama',
      'run-away': 'Fuga',
      'keen-eye': 'Vista Lince',
      'hyper-cutter': 'Hiper Corte',
      'pickup': 'Recogida',
      'truant': 'Pereza',
      'normalize': 'Normalidad',
      'wonder-guard': 'Superguarda',
      'air-lock': 'Ausencia',
      'drizzle': 'Llovizna',
      'drought': 'Sequía',
      'arena-trap': 'Trampa Arena',
      'vital-spirit': 'Espíritu Vital',
      'white-smoke': 'Humo Blanco',
      'pure-power': 'Poder Puro',
      'shell-armor': 'Caparazón',
      'cacophony': 'Cacofonía',
      'air-lock': 'Ausencia',
      'tangled-feet': 'Pies Enredo',
      'motor-drive': 'Electromotor',
      'rivalry': 'Rivalidad',
      'steadfast': 'Impasible',
      'snow-cloak': 'Manto Níveo',
      'gluttony': 'Gula',
      'anger-point': 'Irascible',
      'unburden': 'Liviano',
      'heatproof': 'Ignífugo',
      'simple': 'Simple',
      'dry-skin': 'Piel Seca',
      'download': 'Descarga',
      'iron-fist': 'Puño Féreo',
      'poison-heal': 'Antídoto',
      'adaptability': 'Adaptabilidad',
      'skill-link': 'Encadenado',
      'hydration': 'Hidratación',
      'solar-power': 'Poder Solar',
      'quick-feet': 'Pies Rápidos',
      'normalize': 'Normalidad',
      'sniper': 'Francotirador',
      'magic-guard': 'Muro Mágico',
      'no-guard': 'Indefenso',
      'stall': 'Rezagado',
      'technician': 'Experto',
      'leaf-guard': 'Defensa Hoja',
      'klutz': 'Zoquete',
      'mold-breaker': 'Rompemoldes',
      'super-luck': 'Afortunado',
      'aftermath': 'Detonación',
      'anticipation': 'Anticipación',
      'forewarn': 'Alerta',
      'unaware': 'Ignorante',
      'tinted-lens': 'Cromolente',
      'filter': 'Filtro',
      'slow-start': 'Inicio Lento',
      'scrappy': 'Intrépido',
      'storm-drain': 'Colector',
      'ice-body': 'Gélido',
      'solid-rock': 'Roca Sólida',
      'snow-warning': 'Nevada',
      'honey-gather': 'Recogemiel',
      'frisk': 'Cacheo',
      'reckless': 'Audaz',
      'multitype': 'Multitipo',
      'flower-gift': 'Don Floral',
      'bad-dreams': 'Mal Sueño',
      'pickpocket': 'Pickpocket',
      'sheer-force': 'Potencia Bruta',
      'contrary': 'Respondón',
      'unnerve': 'Nerviosismo',
      'defiant': 'Competitivo',
      'defeatist': 'Flaqueza',
      'cursed-body': 'Cuerpo Maldito',
      'healer': 'Alma Cura',
      'friend-guard': 'Alma Gemela',
      'weak-armor': 'Armadura Frágil',
      'heavy-metal': 'Metal Pesado',
      'light-metal': 'Metal Liviano',
      'multiscale': 'Multiescama',
      'toxic-boost': 'Ímpetu Tóxico',
      'flare-boost': 'Ímpetu Ardiente',
      'harvest': 'Cosecha',
      'telepathy': 'Telepatía',
      'moody': 'Veleta',
      'overcoat': 'Funda',
      'poison-touch': 'Toque Tóxico',
      'regenerator': 'Regeneración',
      'big-pecks': 'Sacapecho',
      'sand-rush': 'Ímpetu Arena',
      'wonder-skin': 'Piel Milagro',
      'analytic': 'Cálculo Final',
      'illusion': 'Ilusión',
      'imposter': 'Impostor',
      'infiltrator': 'Allanamiento',
      'mummy': 'Momia',
      'moxie': 'Autoestima',
      'justified': 'Justiciero',
      'rattled': 'Cobardía',
      'magic-bounce': 'Espejo Mágico',
      'sap-sipper': 'Herbívoro',
      'prankster': 'Bromista',
      'sand-force': 'Poder Arena',
      'iron-barbs': 'Punta Acero',
      'zen-mode': 'Modo Daruma',
      'victory-star': 'Tinovictoria',
      'turboblaze': 'Turbollama',
      'teravolt': 'Teravoltio',
      'levitate': 'Levitación',
      'neutralizing-gas': 'Gas Reactivo',
      'stench': 'Hedor'
    }
    
    const cleanAbility = ability.toLowerCase().replace(/ /g, '-')
    return abilityTranslations[cleanAbility] || capitalizeFirstLetter(ability.replace('-', ' '))
  }

  const formatPokemonId = (id) => {
    return `#${id.toString().padStart(3, '0')}`
  }

  const formatHeight = (height) => {
    return `${(height / 10).toFixed(1)} m`
  }

  const formatWeight = (weight) => {
    return `${(weight / 10).toFixed(1)} kg`
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="pokemon-card">
      <div className="pokemon-card-header">
        <span className="pokemon-id">{formatPokemonId(pokemon.id)}</span>
        <h3 className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</h3>
        <div className="pokemon-actions">
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={() => onToggleFavorite(pokemon)}
            title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
          <button
            className={`team-btn ${isInTeam ? 'active' : ''} ${!canAddToTeam && !isInTeam ? 'disabled' : ''}`}
            onClick={() => onToggleTeam(pokemon)}
            disabled={!canAddToTeam && !isInTeam}
            title={
              isInTeam 
                ? 'Quitar del equipo' 
                : canAddToTeam 
                  ? 'Agregar al equipo' 
                  : 'Equipo lleno (6/6)'
            }
          >
            {isInTeam ? '⭐' : '☆'}
          </button>
        </div>
      </div>
      
      <div className="pokemon-image-container">
        <img
          src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-image"
          loading="lazy"
        />
      </div>

      <div className="pokemon-types">
        {pokemon.types.map((typeInfo, index) => (
          <span
            key={index}
            className="pokemon-type"
            style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
          >
            {translateType(typeInfo.type.name)}
          </span>
        ))}
      </div>

      <div className="pokemon-stats">
        <div className="stat-row">
          <span className="stat-label">Altura:</span>
          <span className="stat-value">{formatHeight(pokemon.height)}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Peso:</span>
          <span className="stat-value">{formatWeight(pokemon.weight)}</span>
        </div>
      </div>

      <div className="pokemon-abilities">
        <h4>Habilidades:</h4>
        <div className="abilities-list">
          {pokemon.abilities.map((abilityInfo, index) => (
            <span key={index} className="ability">
              {translateAbility(abilityInfo.ability.name)}
            </span>
          ))}
        </div>
      </div>

      <div className="pokemon-base-stats">
        <h4>Estadísticas Base:</h4>
        {pokemon.stats.map((statInfo, index) => {
          const statNames = {
            'hp': 'HP',
            'attack': 'Ataque',
            'defense': 'Defensa',
            'special-attack': 'At. Esp.',
            'special-defense': 'Def. Esp.',
            'speed': 'Velocidad'
          }
          
          return (
            <div key={index} className="base-stat">
              <span className="stat-name">
                {statNames[statInfo.stat.name] || statInfo.stat.name}
              </span>
              <div className="stat-bar-container">
                <div 
                  className="stat-bar"
                  style={{ 
                    width: `${(statInfo.base_stat / 255) * 100}%`,
                    backgroundColor: statInfo.base_stat > 100 ? '#4CAF50' : 
                                   statInfo.base_stat > 50 ? '#FF9800' : '#F44336'
                  }}
                ></div>
                <span className="stat-number">{statInfo.base_stat}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PokemonCard
