function WeatherIcon({ iconCode, size = 'large' }) {
  const sizeClasses = {
    small: 'w-12 h-12',
    medium: 'w-20 h-20',
    large: 'w-32 h-32',
  };

  return (
    <img
      src={`https://openweathermap.org/img/wn/${iconCode}@4x.png`}
      alt="Weather icon"
      className={`${sizeClasses[size]} drop-shadow-lg`}
    />
  );
}

export default WeatherIcon;
