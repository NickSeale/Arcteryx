import { useEffect, useState } from "react";
import axios from "axios";

function Products({ trip }) {
  const WEATHER_API_KEY = "ca56233859af128469af10b8ebed7ea0";
  const WEATHER_BASE_URL = "http://api.openweathermap.org/data/2.5/forecast";
  const fullURL =
    "api.openweathermap.org/data/2.5/forecast?lat=24.2&lon=27.4&appid=ca56233859af128469af10b8ebed7ea0";

  const [weatherData, setWeatherData] = useState(null);
  // `${WEATHER_BASE_URL}?lat=${trip.destination.lat}&lon=${trip.destination.lon}&appid=${WEATHER_API_KEY}`

  const handlePageLoad = async () => {
    try {
      const response = await axios.get(
        `${WEATHER_BASE_URL}?lat=${trip.destination.lat}&lon=${trip.destination.lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      console.log(response.data.list);
      setWeatherData(response.data.list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePageLoad();
  }, []);

  return (
    <>
      {weatherData && (
        <div>
          <h1>I am the products page</h1>
          <p>Your trip is {trip.destination.label}</p>
          <p>{weatherData[0].dt_txt}</p>
          <p>Current Temp is {weatherData[0].main.temp}</p>
        </div>
      )}
    </>
  );
}

export default Products;
