# 🎮 Pokédex Completa React

Una Pokédex moderna y completa desarrollada con React y Vite que incluye todas las generaciones de Pokémon disponibles en la PokeAPI.

![Pokédex Preview](https://via.placeholder.com/800x400/667eea/ffffff?text=Pokédex+Completa)

## ✨ Características

### 🔍 **Búsqueda Avanzada**
- Búsqueda por nombre de Pokémon
- Búsqueda por tipos en **español** e inglés
- Búsqueda inteligente sin acentos
- Resultados en tiempo real

### 🌟 **Filtros por Generación**
- **9 generaciones** completas de Pokémon
- Filtro "Todas las generaciones"
- Contadores dinámicos por generación
- Navegación intuitiva entre generaciones

### 🎨 **Diseño Moderno**
- Interfaz responsive para móvil y desktop
- Animaciones suaves y transiciones elegantes
- Tarjetas de Pokémon con información detallada
- Tema con gradientes y efectos glassmorphism

### 📊 **Información Completa**
- **Tipos traducidos al español**: Planta, Fuego, Agua, etc.
- **Habilidades en español**: Levitación, Espesura, etc.
- Estadísticas base con barras de progreso
- Altura, peso y número de Pokédex
- Imágenes oficiales de alta calidad

### ⚡ **Rendimiento Optimizado**
- Carga progresiva con indicador visual
- Paginación inteligente (20 por página)
- Carga por lotes para mejor performance
- Manejo de errores robusto

## 🚀 Generaciones Incluidas

| Generación | Región | Pokémon | Juegos Representativos |
|------------|--------|---------|------------------------|
| 1️⃣ Primera | Kanto | 1-151 | Red, Blue, Yellow |
| 2️⃣ Segunda | Johto | 152-251 | Gold, Silver, Crystal |
| 3️⃣ Tercera | Hoenn | 252-386 | Ruby, Sapphire, Emerald |
| 4️⃣ Cuarta | Sinnoh | 387-493 | Diamond, Pearl, Platinum |
| 5️⃣ Quinta | Unova | 494-649 | Black, White, B2, W2 |
| 6️⃣ Sexta | Kalos | 650-721 | X, Y |
| 7️⃣ Séptima | Alola | 722-809 | Sun, Moon, Ultra |
| 8️⃣ Octava | Galar | 810-905 | Sword, Shield |
| 9️⃣ Novena | Paldea | 906+ | Scarlet, Violet |

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de desarrollo rápida
- **CSS3** - Estilos modernos con Flexbox y Grid
- **Axios** - Cliente HTTP para API requests
- **PokeAPI** - API REST de Pokémon
- **JavaScript ES6+** - Funcionalidades modernas

## 📦 Instalación y Uso

### Prerrequisitos
- Node.js 16 o superior
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/frvargasu/pokedex.git

# Navegar al directorio
cd pokedex

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construir para producción
npm run preview  # Vista previa de la build
npm run lint     # Verificar código con ESLint
```

## 🔧 Estructura del Proyecto

```
pokedex/
├── src/
│   ├── components/          # Componentes React
│   │   ├── PokemonCard.jsx     # Tarjeta individual de Pokémon
│   │   ├── PokemonList.jsx     # Lista con paginación
│   │   ├── SearchBar.jsx       # Barra de búsqueda
│   │   └── GenerationFilter.jsx # Filtros por generación
│   ├── services/            # Servicios API
│   │   └── pokemonApi.js       # Funciones de PokeAPI
│   ├── utils/               # Utilidades
│   │   └── generationUtils.js  # Lógica de generaciones
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos públicos
├── package.json            # Dependencias y scripts
└── README.md              # Documentación
```

## 🌐 Demo en Vivo

Visita la aplicación: [Pokédex Completa](https://tu-usuario.github.io/pokedex)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Funcionalidades Futuras

- [ ] Modo oscuro/claro
- [ ] Favoritos con localStorage
- [ ] Comparador de Pokémon
- [ ] Información de evoluciones
- [ ] Filtros por estadísticas
- [ ] Exportar datos a PDF
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Reconocimientos

- [PokeAPI](https://pokeapi.co/) - Por la increíble API gratuita
- [React](https://reactjs.org/) - Por la excelente biblioteca
- [Vite](https://vitejs.dev/) - Por las herramientas de desarrollo
- Comunidad Pokémon - Por la inspiración

---

**Desarrollado con ❤️ por [frvargasu](https://github.com/frvargasu)**
