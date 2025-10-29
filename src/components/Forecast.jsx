import WeatherIcon from './WeatherIcon';

function Forecast({ forecast }) {
  const getDayName = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  return (
    <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 backdrop-blur-sm">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">5-Day Forecast</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-linear-to-br from-blue-50 to-purple-50 rounded-xl p-4 text-center hover:shadow-lg transition duration-200 border border-gray-100"
          >
            <p className="font-semibold text-gray-700 mb-2">
              {getDayName(day.date)}
            </p>

            <WeatherIcon iconCode={day.icon} size="medium" />

            <p className="text-3xl font-bold text-gray-900 mt-2">
              {day.temperature}°
            </p>

            <p className="text-sm text-gray-600 capitalize mt-1">
              {day.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
