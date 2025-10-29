import { useState } from 'react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { weatherService } from './services/weatherService';

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch both current weather and forecast
      const [weatherData, forecastData] = await Promise.all([
        weatherService.getCurrentWeather(city),
        weatherService.getForecast(city),
      ]);

      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-400 via-purple-500 to-pink-500 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            ☀️ Weather Dashboard
          </h1>
          <p className="text-xl text-white text-opacity-90">
            Get real-time weather information for any city
          </p>
        </div>

        {/* Search Bar */}
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
            <p className="text-white text-xl mt-4">Loading weather data...</p>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-500 bg-opacity-90 text-white rounded-2xl p-6 mb-8 shadow-xl">
            <div className="flex items-center gap-3">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <p className="font-bold text-lg">Error</p>
                <p>{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Weather Data */}
        {weather && !isLoading && (
          <>
            <CurrentWeather weather={weather} />
            {forecast && <Forecast forecast={forecast} />}
          </>
        )}

        {/* Initial State - No search yet */}
        {!weather && !isLoading && !error && (
          <div className="text-center py-16">
            <svg
              className="w-32 h-32 mx-auto text-white text-opacity-50 mb-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <p className="text-2xl text-white font-semibold mb-2">
              Search for a city to get started
            </p>
            <p className="text-white text-opacity-75">
              Try "London", "New York", "Tokyo", or your city!
            </p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center mt-12 text-white text-opacity-75">
          <p>
            Built with React + Vite + Tailwind v4 | Powered by OpenWeather API
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
