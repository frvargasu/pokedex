import { useState, useEffect } from 'react'
import './App.css'
import PokemonList from './components/PokemonList'
import SearchBar from './components/SearchBar'
import GenerationFilter from './components/GenerationFilter'
import { getAllPokemonBatched } from './services/pokemonApi'
import { filterPokemonByGeneration, countPokemonByGeneration } from './utils/generationUtils'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGeneration, setSelectedGeneration] = useState('all')
  const [pokemonCounts, setPokemonCounts] = useState({})

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true)
        setLoadingProgress(0)
        
        // Función para actualizar el progreso de carga
        const updateProgress = (loaded, total) => {
          setLoadingProgress(Math.round((loaded / total) * 100))
        }
        
        // Cargar todos los Pokémon por lotes
        const totalPokemon = 1010 // Número aproximado de Pokémon disponibles
        const batchSize = 50
        let allPokemonData = []
        
        for (let offset = 0; offset < totalPokemon; offset += batchSize) {
          const currentBatchSize = Math.min(batchSize, totalPokemon - offset)
          
          try {
            const pokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${currentBatchSize}&offset=${offset}`)
              .then(res => res.json())
            
            const pokemonDetailsPromises = pokemonList.results.map(pokemon => 
              fetch(pokemon.url).then(res => res.json())
            )
            
            const pokemonDetails = await Promise.all(pokemonDetailsPromises)
            allPokemonData = [...allPokemonData, ...pokemonDetails]
            
            // Actualizar progreso
            updateProgress(allPokemonData.length, totalPokemon)
            
            // Pequeña pausa para no sobrecargar la API
            await new Promise(resolve => setTimeout(resolve, 50))
          } catch (batchError) {
            console.warn(`Error loading batch starting at ${offset}:`, batchError)
            break // Si hay error, paramos aquí y usamos lo que tenemos
          }
        }
        
        setAllPokemon(allPokemonData)
        setFilteredPokemon(allPokemonData)
        
        // Calcular conteos por generación
        const counts = countPokemonByGeneration(allPokemonData)
        setPokemonCounts(counts)
      } catch (error) {
        console.error('Error fetching Pokemon:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPokemon()
  }, [])

  const applyFilters = (pokemon, searchTerm, generation) => {
    let filtered = pokemon

    // Aplicar filtro de generación
    if (generation !== 'all') {
      filtered = filterPokemonByGeneration(filtered, generation)
    }

    // Aplicar filtro de búsqueda
    if (searchTerm !== '') {
      const typeTranslations = {
        'normal': 'normal',
        'fuego': 'fire',
        'agua': 'water',
        'eléctrico': 'electric',
        'electrico': 'electric',
        'planta': 'grass',
        'hielo': 'ice',
        'lucha': 'fighting',
        'veneno': 'poison',
        'tierra': 'ground',
        'volador': 'flying',
        'psíquico': 'psychic',
        'psiquico': 'psychic',
        'bicho': 'bug',
        'roca': 'rock',
        'fantasma': 'ghost',
        'dragón': 'dragon',
        'dragon': 'dragon',
        'siniestro': 'dark',
        'acero': 'steel',
        'hada': 'fairy'
      }

      filtered = filtered.filter(pokemon => {
        const pokemonName = pokemon.name.toLowerCase()
        const searchLower = searchTerm.toLowerCase()
        
        // Buscar por nombre
        const nameMatch = pokemonName.includes(searchLower)
        
        // Buscar por tipo en inglés
        const englishTypeMatch = pokemon.types.some(type => 
          type.type.name.toLowerCase().includes(searchLower)
        )
        
        // Buscar por tipo en español
        const spanishTypeMatch = pokemon.types.some(type => {
          const englishType = type.type.name.toLowerCase()
          return Object.entries(typeTranslations).some(([spanish, english]) => 
            english === englishType && spanish.includes(searchLower)
          )
        })
        
        return nameMatch || englishTypeMatch || spanishTypeMatch
      })
    }

    return filtered
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
    const filtered = applyFilters(allPokemon, term, selectedGeneration)
    setFilteredPokemon(filtered)
  }

  const handleGenerationChange = (generation) => {
    setSelectedGeneration(generation)
    const filtered = applyFilters(allPokemon, searchTerm, generation)
    setFilteredPokemon(filtered)
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Pokédex Completa</h1>
        <p className="subtitle">Todas las generaciones • {allPokemon.length > 0 ? `${allPokemon.length} Pokémon` : ''}</p>
        <SearchBar onSearch={handleSearch} />
      </header>
      
      {!loading && (
        <GenerationFilter 
          selectedGeneration={selectedGeneration}
          onGenerationChange={handleGenerationChange}
          pokemonCounts={pokemonCounts}
        />
      )}
      
      <main className="main-content">
        {loading ? (
          <div className="loading">
            <p>Cargando Pokémon... {loadingProgress}%</p>
            <div className="loading-bar">
              <div 
                className="loading-progress" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <p className="loading-detail">
              {allPokemon.length > 0 ? `${allPokemon.length} Pokémon cargados` : 'Iniciando carga...'}
            </p>
          </div>
        ) : (
          <PokemonList 
            pokemon={filteredPokemon} 
            selectedGeneration={selectedGeneration}
          />
        )}
      </main>
    </div>
  )
}

export default App
