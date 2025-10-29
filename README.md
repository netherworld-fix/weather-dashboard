# ☀️ Weather Dashboard

A beautiful, real-time weather dashboard built with React, Vite, and the OpenWeather API.

![Weather Dashboard](screenshot.png)

## 🌟 Features

- ✅ Real-time weather data for any city worldwide
- ✅ Current temperature, humidity, and wind speed
- ✅ 5-day weather forecast
- ✅ Beautiful gradient UI with weather icons
- ✅ Responsive design (mobile to desktop)
- ✅ Loading states and error handling
- ✅ Powered by OpenWeather API

## 🛠️ Tech Stack

- **Frontend:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **API:** OpenWeather API
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 16+
- OpenWeather API key (free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository
```bash
git clone https://github.com/netherworld-fix/weather-dashboard.git
cd weather-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Create `.env` file
```bash
cp .env.example .env
```

4. Add your OpenWeather API key to `.env`
```
VITE_WEATHER_API_KEY=your_actual_api_key_here
```

5. Start development server
```bash
npm run dev
```

## 📁 Project Structure
```
src/
├── components/
│   ├── SearchBar.jsx
│   ├── CurrentWeather.jsx
│   ├── Forecast.jsx
│   └── WeatherIcon.jsx
├── services/
│   └── weatherService.js
├── App.jsx
└── index.css
```

## 🌐 API Reference

This app uses the [OpenWeather API](https://openweathermap.org/api):
- Current Weather Data API
- 5 Day / 3 Hour Forecast API

## 📝 What I Learned

- Fetching data from external APIs
- Handling async operations with async/await
- Managing loading and error states
- Working with environment variables
- Promise.all for concurrent API calls
- Component composition and props

## 🎯 Future Enhancements

- [ ] Geolocation to detect user's city
- [ ] Save favorite cities (localStorage)
- [ ] Temperature unit toggle (°C / °F)
- [ ] Hourly forecast view
- [ ] Weather alerts
- [ ] Dark mode toggle

## 🌐 Live Demo

[View Live Demo](your-vercel-url-here)

## 👨‍💻 Author

**Desmond Delali**
- GitHub: [@netherworld-fix](https://github.com/netherworld-fix)
- LinkedIn: [Your LinkedIn](your-linkedin-url)

## 📄 License

MIT License - feel free to use this project for learning!

---

Built with ❤️ using React + Vite + Tailwind CSS v4