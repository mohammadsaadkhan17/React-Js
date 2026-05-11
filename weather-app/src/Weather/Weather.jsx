import { useState, useEffect } from "react";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    // Agar city empty ho → return
    if (!city) {
      setWeather(null);
      return;
    }

    // Async function inside useEffect
    const fetchWeather = async () => {
        setLoading(true);
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7807a2b0e31dd1c6d4fa943abc53361c&units=metric`
        );

        const data = await response.json();

        // Agar city valid nahi → handle karo
        if (data.cod !== 200) {
          setWeather(null);
        
        } else {
          setWeather(data);
        }
      } catch (error) {
        console.log("Error fetching weather:", error);
        setWeather(null);
      } finally {
        setLoading(false); // 🔥 fetch end → hide loading
      }
    };

    // Thoda delay lagana chahiye type karne ke liye (debounce)
    const timer = setTimeout(() => {
      fetchWeather();
    }, 500); // 500ms delay

    // Cleanup function → typing ke beech purana timeout cancel ho jaye
    return () => clearTimeout(timer);

  }, [city]); // 🔥 city change hote hi useEffect chalega

 

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={handleCityChange}
      />

 {loading && <p>Loading...</p>}
      {!loading && weather && weather.main && (
        <>
          <h4>{weather.name}</h4>
          <h3>Temperature: {weather.main.temp}°C</h3>
          <h3>{weather.weather[0].description}</h3>
        </>
      )}

      {!weather && city && <p>City not found ❌</p>}
    </div>
  );
}