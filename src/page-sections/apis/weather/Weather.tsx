import { useState, useEffect } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  CircularProgress,
  Autocomplete,
  TextField,
  Grid,
  IconButton,
  Tabs,
  Tab,
  Divider,
  Paper,
  Tooltip
} from '@mui/material';
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker 
} from 'react-simple-maps';
import { scaleLinear } from 'd3-scale';
import { 
  WeatherData, 
  ForecastData, 
  LocationSuggestion 
} from '../types';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import RefreshIcon from '@mui/icons-material/Refresh';

const getWeatherBackground = (condition: string, temp: number): string => {
  const conditionLower = condition.toLowerCase();
  
  if (conditionLower.includes('sunny') || conditionLower.includes('clear')) {
    return '#FFE87C';
  }
  if (temp >= 30) {
    return '#FFB347';
  }
  if (conditionLower.includes('rain') || conditionLower.includes('drizzle') || conditionLower.includes('thunder')) {
    return '#D3D3D3';
  }
  if (conditionLower.includes('cloudy') || conditionLower.includes('overcast')) {
    return '#87CEEB';
  }
  return '#FFFFFF';
};

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-50m.json";

const majorCities = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
  { name: "Moscow", coordinates: [37.6173, 55.7558] },
  { name: "Dubai", coordinates: [55.2708, 25.2048] },
  { name: "Singapore", coordinates: [103.8198, 1.3521] },
  { name: "Rio de Janeiro", coordinates: [-43.1729, -22.9068] }
];

const colorScale = scaleLinear<string>()
  .domain([-20, 0, 15, 30, 45])
  .range(['#313695', '#74add1', '#fed976', '#fd8d3c', '#bd0026']);

const Weather = () => {
  const [searchInput, setSearchInput] = useState('');
  const [suggestions, setSuggestions] = useState<LocationSuggestion[]>([]);
  const [weather, setWeather] = useState<ForecastData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [worldTemperatures, setWorldTemperatures] = useState<{ [key: string]: number }>({});
  const [loadingMap, setLoadingMap] = useState(true);

  const fetchSuggestions = async (input: string) => {
    if (!input) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=82e455aa8a5f4d659b003842250402&q=${input}`
      );
      if (!response.ok) throw new Error('Failed to fetch suggestions');
      const data = await response.json();
      setSuggestions(data);
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };

  const fetchWeather = async (location: string) => {
    if (!location) return;
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=82e455aa8a5f4d659b003842250402&q=${location}&days=7`
      );
      
      if (!response.ok) {
        throw new Error('Location not found');
      }
      
      const data = await response.json();
      setWeather(data);
      setLastUpdated(new Date());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationSelect = (_: any, value: LocationSuggestion | null) => {
    if (value) {
      setSearchInput(value.name);
      fetchWeather(value.name);
    }
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(`${latitude},${longitude}`);
        },
        (error) => {
          setError('Error getting location: ' + error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchSuggestions(searchInput);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchInput]);

  useEffect(() => {
    fetchWorldTemperatures();
  }, []);

  const fetchWorldTemperatures = async () => {
    setLoadingMap(true);
    try {
      const temperatures: { [key: string]: number } = {};
      await Promise.all(
        majorCities.map(async (city) => {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=82e455aa8a5f4d659b003842250402&q=${city.name}`
          );
          const data = await response.json();
          temperatures[city.name] = data.current.temp_c;
        })
      );
      setWorldTemperatures(temperatures);
    } catch (err) {
      console.error('Error fetching world temperatures:', err);
    } finally {
      setLoadingMap(false);
    }
  };

  const backgroundColor = weather 
    ? getWeatherBackground(weather.current.condition.text, weather.current.temp_c)
    : '#FFFFFF';

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4, p: 2 }}>
      <Card sx={{ 
        backgroundColor,
        transition: 'background-color 0.3s ease',
        boxShadow: 3
      }}>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 0 }}>
              Weather Forecast
            </Typography>
            <Box>
              <Tooltip title="Use current location">
                <IconButton onClick={getCurrentLocation}>
                  <MyLocationIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Refresh">
                <IconButton onClick={() => weather && fetchWeather(weather.location.name)}>
                  <RefreshIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
            <Autocomplete
              fullWidth
              options={suggestions}
              getOptionLabel={(option) => `${option.name}, ${option.country}`}
              onChange={handleLocationSelect}
              onInputChange={(_, value) => setSearchInput(value)}
              inputValue={searchInput}
              loading={loading}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search location"
                  variant="outlined"
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? <CircularProgress color="inherit" size={20} /> : null}
                        {params.InputProps.endAdornment}
                      </>
                    ),
                  }}
                />
              )}
            />
          </Box>

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          {weather && (
            <>
              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Typography variant="h6">
                        {weather.location.name}, {weather.location.country}
                      </Typography>
                      <Typography variant="caption">
                        Last updated: {lastUpdated?.toLocaleTimeString()}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                        <img
                          src={`https:${weather.current.condition.icon}`}
                          alt={weather.current.condition.text}
                          style={{ width: 64, height: 64 }}
                        />
                        <Box sx={{ ml: 2 }}>
                          <Typography variant="h3">
                            {weather.current.temp_c}°C
                          </Typography>
                          <Typography>
                            {weather.current.condition.text}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                      <Typography variant="h6" gutterBottom>Current Details</Typography>
                      <Grid container spacing={2}>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <ThermostatIcon sx={{ mr: 1 }} />
                            <Box>
                              <Typography variant="body2">Feels Like</Typography>
                              <Typography>{weather.current.feelslike_c}°C</Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <OpacityIcon sx={{ mr: 1 }} />
                            <Box>
                              <Typography variant="body2">Humidity</Typography>
                              <Typography>{weather.current.humidity}%</Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AirIcon sx={{ mr: 1 }} />
                            <Box>
                              <Typography variant="body2">Wind Speed</Typography>
                              <Typography>{weather.current.wind_kph} km/h</Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={6}>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <WbSunnyIcon sx={{ mr: 1 }} />
                            <Box>
                              <Typography variant="body2">UV Index</Typography>
                              <Typography>{weather.current.uv}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>

                <Box sx={{ mt: 3 }}>
                  <Tabs
                    value={selectedTab}
                    onChange={(_, newValue) => setSelectedTab(newValue)}
                    variant="fullWidth"
                  >
                    <Tab label="Daily Forecast" />
                    <Tab label="Astronomy" />
                  </Tabs>

                  {selectedTab === 0 && (
                    <Box sx={{ mt: 2 }}>
                      <Grid container spacing={2}>
                        {weather.forecast.forecastday.map((day) => (
                          <Grid item xs={12} sm={6} md={4} key={day.date}>
                            <Paper elevation={3} sx={{ p: 2 }}>
                              <Typography variant="subtitle1">
                                {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                              </Typography>
                              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <img
                                  src={`https:${day.day.condition.icon}`}
                                  alt={day.day.condition.text}
                                  style={{ width: 40, height: 40 }}
                                />
                                <Box sx={{ ml: 1 }}>
                                  <Typography variant="h6">
                                    {day.day.maxtemp_c}°C
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary">
                                    {day.day.mintemp_c}°C
                                  </Typography>
                                </Box>
                              </Box>
                              <Typography variant="body2" sx={{ mt: 1 }}>
                                {day.day.condition.text}
                              </Typography>
                              <Typography variant="body2" color="textSecondary">
                                Rain: {day.day.daily_chance_of_rain}%
                              </Typography>
                            </Paper>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                  )}

                  {selectedTab === 1 && (
                    <Box sx={{ mt: 2 }}>
                      <Paper elevation={3} sx={{ p: 2 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <WbTwilightIcon sx={{ mr: 1 }} />
                              <Box>
                                <Typography variant="body2">Sunrise</Typography>
                                <Typography>{weather.forecast.forecastday[0].astro.sunrise}</Typography>
                              </Box>
                            </Box>
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <WbTwilightIcon sx={{ mr: 1 }} />
                              <Box>
                                <Typography variant="body2">Sunset</Typography>
                                <Typography>{weather.forecast.forecastday[0].astro.sunset}</Typography>
                              </Box>
                            </Box>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Box>
                  )}
                </Box>
              </Box>
            </>
          )}
          {!weather && !loading && !error && (
            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>
                Global Temperature Map
              </Typography>
              <Card 
                sx={{ 
                  p: 2, 
                  bgcolor: '#F8FAFB',
                  border: '1px solid #E0E0E0',
                  borderRadius: 2
                }}
              >
                {loadingMap ? (
                  <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
                    <CircularProgress />
                  </Box>
                ) : (
                  <Box 
                    sx={{ 
                      height: 500,
                      width: '100%',
                      '& svg': {
                        display: 'block',
                        width: '100%',
                        height: '100%'
                      }
                    }}
                  >
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 120,
                      }}
                      style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#F1F5F7'
                      }}
                    >
                      <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill="#E2E8EC"
                              stroke="#FFFFFF"
                              strokeWidth={0.5}
                              style={{
                                default: {
                                  outline: 'none',
                                  transition: 'all 0.3s'
                                },
                                hover: {
                                  fill: '#D1D8DC',
                                  outline: 'none',
                                  transition: 'all 0.3s'
                                },
                                pressed: {
                                  fill: '#D1D8DC',
                                  outline: 'none'
                                }
                              }}
                            />
                          ))
                        }
                      </Geographies>
                      {majorCities.map(({ name, coordinates }) => (
                        <Marker key={name} coordinates={coordinates}>
                          <g transform="translate(-12, -24)">
                            <circle
                              r={6}
                              fill={colorScale(worldTemperatures[name] || 0)}
                              stroke="#FFFFFF"
                              strokeWidth={2}
                              style={{
                                cursor: 'pointer',
                                filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.2))'
                              }}
                            />
                            <text
                              y={-8}
                              x={12}
                              textAnchor="middle"
                              style={{
                                fontFamily: 'system-ui',
                                fontSize: '11px',
                                fill: '#2C3E50',
                                fontWeight: 'bold',
                                filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.8))'
                              }}
                            >
                              {name}
                            </text>
                            <text
                              y={4}
                              x={12}
                              textAnchor="middle"
                              style={{
                                fontFamily: 'system-ui',
                                fontSize: '10px',
                                fill: '#34495E',
                                filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.8))'
                              }}
                            >
                              {worldTemperatures[name] && `${Math.round(worldTemperatures[name])}°C`}
                            </text>
                          </g>
                        </Marker>
                      ))}
                    </ComposableMap>
                  </Box>
                )}
                <Box sx={{ mt: 3, borderTop: '1px solid #E0E0E0', pt: 2 }}>
                  <Typography variant="subtitle2" gutterBottom>
                    Temperature Scale:
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                  }}>
                    {[-20, 0, 15, 30, 45].map((temp) => (
                      <Box
                        key={temp}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                          bgcolor: 'rgba(0,0,0,0.03)'
                        }}
                      >
                        <Box
                          sx={{
                            width: 16,
                            height: 16,
                            bgcolor: colorScale(temp),
                            borderRadius: '50%',
                            border: '2px solid #FFF',
                            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                          }}
                        />
                        <Typography variant="caption" sx={{ fontWeight: 'medium' }}>
                          {temp}°C
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Card>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Weather;
