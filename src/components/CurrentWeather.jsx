import WeatherIcon from './WeatherIcon';

function CurrentWeather({ weather }) {
  return (
    <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 mb-8 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Left side - Location and Temperature */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            {weather.city}, {weather.country}
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-4">
            <span className="text-7xl font-bold text-gray-900">
              {weather.temperature}°
            </span>
            <div className="text-left">
              <p className="text-2xl text-gray-700 capitalize">
                {weather.description}
              </p>
              <p className="text-gray-500">Feels like {weather.feelsLike}°</p>
            </div>
          </div>
        </div>

        {/* Right side - Weather Icon */}
        <div className="flex flex-col items-center">
          <WeatherIcon iconCode={weather.icon} size="large" />
          <p className="text-xl font-semibold text-gray-700 mt-2">
            {weather.main}
          </p>
        </div>
      </div>

      {/* Weather Details */}
      <div className="grid grid-cols-2 gap-6 mt-8 pt-8 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Humidity</p>
            <p className="text-2xl font-bold text-gray-800">
              {weather.humidity}%
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-purple-100 p-3 rounded-full">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Wind Speed</p>
            <p className="text-2xl font-bold text-gray-800">
              {weather.windSpeed} km/h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
