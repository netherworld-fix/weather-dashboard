const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const weatherService = {
  // Get current weather by city name
  async getCurrentWeather(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      return {
        city: data.name,
        country: data.sys.country,
        temperature: Math.round(data.main.temp),
        feelsLike: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        windSpeed: Math.round(data.wind.speed * 3.6), // Convert m/s to km/h
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        main: data.weather[0].main,
      };
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch weather data');
    }
  },

  // Get 5-day forecast
  async getForecast(city) {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();

      // Get one forecast per day (at 12:00)
      const dailyForecasts = data.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
      );

      return dailyForecasts.slice(0, 5).map((item) => ({
        date: new Date(item.dt * 1000),
        temperature: Math.round(item.main.temp),
        description: item.weather[0].description,
        icon: item.weather[0].icon,
        main: item.weather[0].main,
      }));
    } catch (error) {
      throw new Error(error.message || 'Failed to fetch forecast data');
    }
  },
};
