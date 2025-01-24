import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  CircularProgress, 
  TextField, 
  Button,
  IconButton,
  Divider,
  Paper,
  useTheme
} from '@mui/material';
import {
  WbSunny as SunIcon,
  Cloud as CloudIcon,
  Thunderstorm as StormIcon,
  AcUnit as SnowIcon,
  WaterDrop as RainIcon,
  Search as SearchIcon,
  LocationOn as LocationIcon,
  Air as WindIcon,
  Opacity as HumidityIcon,
  Thermostat as TempIcon,
  Visibility as VisibilityIcon
} from '@mui/icons-material';

interface WeatherData {
  current: {
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    is_day: number;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
  };
}

interface GeocodingResult {
  results?: Array<{
    latitude: number;
    longitude: number;
    name: string;
    country: string;
    admin1?: string;
  }>;
}

interface LocationSuggestion {
  name: string;
  fullName: string;
  latitude: number;
  longitude: number;
}

export const Weather = () => {
  const theme = useTheme();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [city, setCity] = useState('London');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [locationName, setLocationName] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchDebounce, setSearchDebounce] = useState<NodeJS.Timeout>();

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);
    try {
      // First, get coordinates for the city using geocoding API
      const geocodingResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
      );
      const geocodingData: GeocodingResult = await geocodingResponse.json();

      if (!geocodingData.results || geocodingData.results.length === 0) {
        throw new Error('City not found');
      }

      const { latitude, longitude, name, country, admin1 } = geocodingData.results[0];
      const locationString = admin1 ? `${name}, ${admin1}, ${country}` : `${name}, ${country}`;
      setLocationName(locationString);

      // Add to recent searches if not already present
      setRecentSearches(prev => {
        const newSearches = [locationString, ...prev.filter(s => s !== locationString)].slice(0, 5);
        return newSearches;
      });

      // Then, get weather data using the coordinates
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,is_day&hourly=temperature_2m,weather_code&timezone=auto`
      );
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchLocationSuggestions = async (query: string) => {
    if (!query || query.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=5&language=en&format=json`
      );
      const data: GeocodingResult = await response.json();
      
      if (data.results) {
        const suggestions: LocationSuggestion[] = data.results.map(result => ({
          name: result.name,
          fullName: result.admin1 
            ? `${result.name}, ${result.admin1}, ${result.country}`
            : `${result.name}, ${result.country}`,
          latitude: result.latitude,
          longitude: result.longitude
        }));
        setSuggestions(suggestions);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error('Error fetching suggestions:', err);
      setSuggestions([]);
    }
  };

  const handleCityInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    setShowSuggestions(true);

    // Clear previous timeout
    if (searchDebounce) {
      clearTimeout(searchDebounce);
    }

    // Debounce the API call
    const timeout = setTimeout(() => {
      fetchLocationSuggestions(value);
    }, 2000);

    setSearchDebounce(timeout);
  };

  const handleSuggestionClick = async (suggestion: LocationSuggestion) => {
    setCity(suggestion.name);
    setShowSuggestions(false);
    setSuggestions([]);
    setLocationName(suggestion.fullName);

    // Add to recent searches
    setRecentSearches(prev => {
      const newSearches = [suggestion.fullName, ...prev.filter(s => s !== suggestion.fullName)].slice(0, 5);
      return newSearches;
    });

    // Fetch weather for selected location
    setLoading(true);
    setError(null);
    try {
      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${suggestion.latitude}&longitude=${suggestion.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,is_day&hourly=temperature_2m,weather_code&timezone=auto`
      );
      if (!weatherResponse.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const weatherData = await weatherResponse.json();
      setWeather(weatherData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setShowSuggestions(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const getWeatherIcon = (weatherCode: number, size = 40) => {
    // WMO Weather interpretation codes (WW)
    if (weatherCode <= 3) return <SunIcon sx={{ fontSize: size, color: '#FFB300' }} />; // Clear or partly cloudy
    if (weatherCode <= 49) return <CloudIcon sx={{ fontSize: size, color: '#78909C' }} />; // Cloudy, foggy
    if (weatherCode <= 69) return <RainIcon sx={{ fontSize: size, color: '#42A5F5' }} />; // Rain
    if (weatherCode <= 79) return <SnowIcon sx={{ fontSize: size, color: '#90CAF9' }} />; // Snow
    return <StormIcon sx={{ fontSize: size, color: '#5C6BC0' }} />; // Thunderstorm
  };

  const getWeatherDescription = (weatherCode: number): string => {
    if (weatherCode <= 3) return 'Clear Sky';
    if (weatherCode <= 49) return 'Cloudy';
    if (weatherCode <= 69) return 'Rainy';
    if (weatherCode <= 79) return 'Snowy';
    if (weatherCode <= 99) return 'Thunderstorm';
    return 'Unknown';
  };

  const getWindDirection = (degrees: number): string => {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const index = Math.round(degrees / 45) % 8;
    return directions[index];
  };

  const WeatherInfoCard = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
    <Paper elevation={0} sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1, bgcolor: 'background.default' }}>
      {icon}
      <Box>
        <Typography variant="body2" color="text.secondary">{label}</Typography>
        <Typography variant="body1">{value}</Typography>
      </Box>
    </Paper>
  );

  return (
    <Box sx={{ p: 3 }}>
      

      <Box sx={{ mb: 4, display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
        <Box sx={{ position: 'relative', flexGrow: 1 }} onClick={(e) => e.stopPropagation()}>
          <TextField
            fullWidth
            label="Enter city"
            value={city}
            onChange={handleCityInputChange}
            size="small"
            onKeyPress={(e) => e.key === 'Enter' && fetchWeather()}
            InputProps={{
              startAdornment: <LocationIcon sx={{ mr: 1, color: 'text.secondary' }} />,
            }}
          />
          {showSuggestions && suggestions.length > 0 && (
            <Paper
              sx={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                mt: 1,
                zIndex: 1000,
                maxHeight: '300px',
                overflow: 'auto',
                boxShadow: 3
              }}
            >
              {suggestions.map((suggestion, index) => (
                <Box
                  key={index}
                  sx={{
                    p: 1.5,
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                    borderBottom: index < suggestions.length - 1 ? 1 : 0,
                    borderColor: 'divider'
                  }}
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <Typography variant="body1">
                    {suggestion.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {suggestion.fullName}
                  </Typography>
                </Box>
              ))}
            </Paper>
          )}
        </Box>
        <Button 
          variant="contained" 
          onClick={fetchWeather} 
          disabled={loading}
          startIcon={<SearchIcon />}
          sx={{ minWidth: 120 }}
        >
          Search
        </Button>
      </Box>

      {recentSearches.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Recent Searches
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {recentSearches.map((search) => (
              <Button
                key={search}
                size="small"
                variant="outlined"
                onClick={() => {
                  setCity(search.split(',')[0]);
                  fetchWeather();
                }}
                sx={{ textTransform: 'none' }}
              >
                {search}
              </Button>
            ))}
          </Box>
        </Box>
      )}

      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <Typography color="error">{error}</Typography>
        </Box>
      )}

      {weather && !loading && !error && (
        <Card sx={{ 
          overflow: 'visible',
          background: theme.palette.mode === 'dark' 
            ? 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)'
            : 'linear-gradient(45deg, #bbdefb 30%, #90caf9 90%)'
        }}>
          <CardContent>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h4" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'inherit' }}>
                {locationName}
              </Typography>
              <Typography variant="h6" sx={{ color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'inherit' }}>
                {getWeatherDescription(weather.current.weather_code)}
              </Typography>
            </Box>

            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  mb: 3
                }}>
                  {getWeatherIcon(weather.current.weather_code, 64)}
                  <Box>
                    <Typography variant="h2" sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'inherit' }}>
                      {Math.round(weather.current.temperature_2m)}°C
                    </Typography>
                    <Typography variant="subtitle1" sx={{ color: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.7)' : 'inherit' }}>
                      Feels like {Math.round(weather.current.apparent_temperature)}°C
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <WeatherInfoCard
                      icon={<HumidityIcon />}
                      label="Humidity"
                      value={`${weather.current.relative_humidity_2m}%`}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <WeatherInfoCard
                      icon={<WindIcon />}
                      label="Wind"
                      value={`${weather.current.wind_speed_10m} km/h ${getWindDirection(weather.current.wind_direction_10m)}`}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Divider sx={{ my: 3 }} />

            <Typography variant="h6" gutterBottom sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'inherit' }}>
              Hourly Forecast
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              overflowX: 'auto', 
              pb: 2,
              '&::-webkit-scrollbar': {
                height: 8,
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 4,
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,0.2)',
                borderRadius: 4,
              },
            }}>
              {weather.hourly.time.slice(0, 24).map((time, index) => (
                <Paper
                  key={time}
                  elevation={0}
                  sx={{
                    p: 2,
                    minWidth: 100,
                    textAlign: 'center',
                    bgcolor: 'background.default'
                  }}
                >
                  <Typography variant="body2" color="text.secondary">
                    {new Date(time).getHours()}:00
                  </Typography>
                  {getWeatherIcon(weather.hourly.weather_code[index], 32)}
                  <Typography variant="body1">
                    {Math.round(weather.hourly.temperature_2m[index])}°C
                  </Typography>
                </Paper>
              ))}
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Weather;
