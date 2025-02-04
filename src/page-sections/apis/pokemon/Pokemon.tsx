import { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  TextField, 
  Button, 
  CircularProgress,
  Autocomplete,
  Grid,
  LinearProgress,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import { PokemonData } from '../types';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';

// Type color mapping
const typeColors: { [key: string]: string } = {
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
};

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('favoritePokemon');
    return saved ? JSON.parse(saved) : [];
  });
  const [categoryPokemon, setCategoryPokemon] = useState<{ [key: string]: PokemonData[] }>({});
  const [loadingCategories, setLoadingCategories] = useState(false);

  // Popular Pokemon categories
  const categories = [
    { name: 'Starter', pokemon: ['bulbasaur', 'charmander', 'squirtle'] },
    { name: 'Legendary', pokemon: ['mewtwo', 'mew', 'lugia'] },
    { name: 'Dragon', pokemon: ['dragonite', 'charizard', 'garchomp'] },
    { name: 'Popular', pokemon: ['pikachu', 'eevee', 'snorlax'] }
  ];

  useEffect(() => {
    localStorage.setItem('favoritePokemon', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    fetchCategoryPokemon();
  }, []);

  const fetchPokemonList = async (input: string) => {
    if (input.length < 2) return;
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
      );
      const data = await response.json();
      const filteredPokemon = data.results
        .map((p: { name: string }) => p.name)
        .filter((name: string) => name.includes(input.toLowerCase()));
      setSuggestions(filteredPokemon);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };

  const fetchPokemon = async () => {
    if (!pokemonName) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`
      );
      
      if (!response.ok) {
        throw new Error('Pokemon not found');
      }
      
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch Pokemon data');
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategoryPokemon = async () => {
    setLoadingCategories(true);
    const categoryData: { [key: string]: PokemonData[] } = {};

    try {
      for (const category of categories) {
        const pokemonList = await Promise.all(
          category.pokemon.map(async (name) => {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
            return response.json();
          })
        );
        categoryData[category.name] = pokemonList;
      }
      setCategoryPokemon(categoryData);
    } catch (err) {
      console.error('Error fetching category Pokemon:', err);
    } finally {
      setLoadingCategories(false);
    }
  };

  const toggleFavorite = (name: string) => {
    setFavorites(prev => 
      prev.includes(name) 
        ? prev.filter(p => p !== name)
        : [...prev, name]
    );
  };

  const getStatColor = (value: number) => {
    if (value >= 100) return '#4CAF50';
    if (value >= 70) return '#8BC34A';
    if (value >= 50) return '#FFC107';
    return '#FF5722';
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
      <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
            <CatchingPokemonIcon sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h5">
              Pokemon Search
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
            <Autocomplete
              fullWidth
              freeSolo
              options={suggestions}
              value={pokemonName}
              onInputChange={(_, value) => {
                setPokemonName(value);
                fetchPokemonList(value);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Enter Pokemon name"
                  variant="outlined"
                  onKeyPress={(e) => e.key === 'Enter' && fetchPokemon()}
                />
              )}
            />
            <Button
              variant="contained"
              onClick={fetchPokemon}
              disabled={loading || !pokemonName}
              startIcon={<CatchingPokemonIcon />}
            >
              Search
            </Button>
          </Box>

          {loading && (
            <Box sx={{ width: '100%', my: 2 }}>
              <LinearProgress />
            </Box>
          )}

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {pokemon ? (
            <Box sx={{ mt: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
                  {pokemon.name}
                </Typography>
                <Box>
                  <Tooltip title="Add to favorites">
                    <IconButton 
                      onClick={() => toggleFavorite(pokemon.name)}
                      color={favorites.includes(pokemon.name) ? 'primary' : 'default'}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Compare stats">
                    <IconButton>
                      <CompareArrowsIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'center',
                    bgcolor: 'background.default',
                    borderRadius: 2,
                    p: 2
                  }}>
                    <img
                      src={pokemon.sprites.front_default}
                      alt={pokemon.name}
                      style={{ width: 200, height: 200, objectFit: 'contain' }}
                    />
                  </Box>
                  
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="subtitle1" gutterBottom>Types:</Typography>
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                      {pokemon.types.map((type) => (
                        <Chip
                          key={type.type.name}
                          label={type.type.name}
                          sx={{
                            bgcolor: typeColors[type.type.name] || 'primary.main',
                            color: 'white',
                            textTransform: 'capitalize'
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography variant="h6" gutterBottom>Base Stats:</Typography>
                  {pokemon.stats.map((stat) => (
                    <Box key={stat.stat.name} sx={{ mt: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                        <Typography sx={{ textTransform: 'capitalize' }}>
                          {stat.stat.name}
                        </Typography>
                        <Typography fontWeight="bold">
                          {stat.base_stat}
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={Math.min(100, (stat.base_stat / 150) * 100)}
                        sx={{
                          height: 8,
                          borderRadius: 1,
                          bgcolor: 'grey.200',
                          '& .MuiLinearProgress-bar': {
                            bgcolor: getStatColor(stat.base_stat)
                          }
                        }}
                      />
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Box>
          ) : (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Popular Categories
              </Typography>
              {loadingCategories ? (
                <Box sx={{ width: '100%', my: 2 }}>
                  <LinearProgress />
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {categories.map((category) => (
                    <Grid item xs={12} key={category.name}>
                      <Box>
                        <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 'bold' }}>
                          {category.name} Pokemon
                        </Typography>
                        <Grid container spacing={2}>
                          {categoryPokemon[category.name]?.map((pokemon) => (
                            <Grid item xs={12} sm={4} key={pokemon.name}>
                              <Card 
                                sx={{ 
                                  p: 2, 
                                  cursor: 'pointer',
                                  transition: 'transform 0.2s',
                                  '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: 4
                                  }
                                }}
                                onClick={() => {
                                  setPokemonName(pokemon.name);
                                  fetchPokemon();
                                }}
                              >
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                  <img
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    style={{ width: 120, height: 120 }}
                                  />
                                  <Typography 
                                    sx={{ 
                                      textTransform: 'capitalize',
                                      fontWeight: 'medium'
                                    }}
                                  >
                                    {pokemon.name}
                                  </Typography>
                                  <Box sx={{ display: 'flex', gap: 0.5, mt: 1 }}>
                                    {pokemon.types.map((type) => (
                                      <Chip
                                        key={type.type.name}
                                        label={type.type.name}
                                        size="small"
                                        sx={{
                                          bgcolor: typeColors[type.type.name] || 'primary.main',
                                          color: 'white',
                                          textTransform: 'capitalize'
                                        }}
                                      />
                                    ))}
                                  </Box>
                                </Box>
                              </Card>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              )}
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Pokemon;
