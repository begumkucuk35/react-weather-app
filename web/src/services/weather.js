const GEOCODE = "https://geocoding-api.open-meteo.com/v1/search";
const FORECAST = "https://api.open-meteo.com/v1/forecast";

export async function geocodeCity(query) {
  if (!query) return [];
  const url = `${GEOCODE}?name=${encodeURIComponent(query)}&count=5&language=en&format=json`;
  const res = await fetch(url);
  const data = await res.json();
  return (data.results || []).map(r => ({
    name: `${r.name}${r.country ? ", " + r.country : ""}`,
    lat: r.latitude,
    lon: r.longitude,
  }));
}

export async function getWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: lat,
    longitude: lon,
    current: "temperature_2m,apparent_temperature,relative_humidity_2m,weather_code",
    hourly: "temperature_2m,precipitation_probability",
    daily: "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum",
    timezone: "auto",
  });
  const res = await fetch(`${FORECAST}?${params.toString()}`);
  return res.json();
}
geocodeCity("Istanbul").then(console.log);
getWeather(41.0082, 28.9784).then(console.log);