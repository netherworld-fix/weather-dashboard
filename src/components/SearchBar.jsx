import { useState } from 'react';

function SearchBar({ onSearch, isLoading }) {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Search for a city..."
          disabled={isLoading}
          className="w-full px-6 py-4 text-lg border-2 border-white bg-white bg-opacity-90 rounded-full focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
        />
        <button
          type="submit"
          disabled={isLoading || !city.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-linear-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-md"
        >
          {isLoading ? (
            <svg
              className="animate-spin h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            'Search'
          )}
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
