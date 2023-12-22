import "./Weather.scss";
import "../../styles/_global.scss";

function Weather({ weatherData, location }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date1_epoch = new Date(weatherData[0].dt * 1000);
  const date1 = date1_epoch.getDay();
  const date2_epoch = new Date(weatherData[8].dt * 1000);
  const date2 = date2_epoch.getDay();
  const date3_epoch = new Date(weatherData[16].dt * 1000);
  const date3 = date3_epoch.getDay();
  const date4_epoch = new Date(weatherData[24].dt * 1000);
  const date4 = date4_epoch.getDay();
  const date5_epoch = new Date(weatherData[32].dt * 1000);
  const date5 = date5_epoch.getDay();
  // console.log(
  //   weatherData[0].dt,
  //   weatherData[8].dt,
  //   weatherData[16].dt,
  //   weatherData[24].dt,
  //   weatherData[32].dt
  // );
  // console.log(date1, date2, date3, date4, date5);

  const tempMin = [];
  const tempMax = [];

  const getWeatherData = () => {
    const tempArray = [];
    weatherData.forEach((element) => {
      tempArray.push(Math.round(element.main.temp));
    });

    // Hackathon code! We love working code!
    tempMin.push(Math.min(...tempArray.slice(0, 7)));
    tempMin.push(Math.min(...tempArray.slice(8, 15)));
    tempMin.push(Math.min(...tempArray.slice(16, 23)));
    tempMin.push(Math.min(...tempArray.slice(24, 31)));
    tempMin.push(Math.min(...tempArray.slice(32, 39)));

    tempMax.push(Math.max(...tempArray.slice(0, 7)));
    tempMax.push(Math.max(...tempArray.slice(8, 15)));
    tempMax.push(Math.max(...tempArray.slice(16, 23)));
    tempMax.push(Math.max(...tempArray.slice(24, 31)));
    tempMax.push(Math.max(...tempArray.slice(32, 39)));
  };

  getWeatherData();

  return (
    <div className="weather">
      <section className="weather__info">
        <p className="weather__info-text">{location}</p>
      </section>
      <section className="weather__date">
        <p className="weather__date-title">Current</p>
        <img
          className="weather__icon"
          src={`/assets/weather-icons/${weatherData[0].weather[0].icon}.png`}
          alt="weather icon"
        />
        <p className="weather__current-temp">
          {Math.round(weatherData[0].main.feels_like)}°C
        </p>
      </section>
      {/* Why didn't I just map it? Because it's a hackathon! */}
      {/* WEATHER DATE 1 */}
      <section className="weather__date">
        <p className="weather__date-title">{days[date1]}</p>
        <img
          className="weather__icon"
          src={`/assets/weather-icons/${weatherData[0].weather[0].icon}.png`}
          alt="weather icon"
        />
        <div className="weather__temps">
          <p className="weather__temp">{tempMin[0]}</p>
          <p className="weather__temp">{tempMax[0]}</p>
        </div>
      </section>
      {/* WEATHER DATE 2 */}
      <section className="weather__date">
        <p className="weather__date-title">{days[date2]}</p>
        <img
          className="weather__icon"
          src={`/assets/weather-icons/${weatherData[8].weather[0].icon}.png`}
          alt="weather icon"
        />
        <div className="weather__temps">
          <p className="weather__temp">{tempMin[1]}</p>
          <p className="weather__temp">{tempMax[1]}</p>
        </div>
      </section>
      {/* WEATHER DATE 3 */}
      <section className="weather__date">
        <p className="weather__date-title">{days[date3]}</p>
        <img
          className="weather__icon"
          src={`/assets/weather-icons/${weatherData[16].weather[0].icon}.png`}
          alt="weather icon"
        />
        <div className="weather__temps">
          <p className="weather__temp">{tempMin[2]}</p>
          <p className="weather__temp">{tempMax[2]}</p>
        </div>
      </section>
      {/* WEATHER DATE 4 */}
      <section className="weather__date">
        <p className="weather__date-title">{days[date4]}</p>
        <img
          className="weather__icon"
          src={`/assets/weather-icons/${weatherData[24].weather[0].icon}.png`}
          alt="weather icon"
        />
        <div className="weather__temps">
          <p className="weather__temp">{tempMin[3]}</p>
          <p className="weather__temp">{tempMax[3]}</p>
        </div>
      </section>
      {/* WEATHER DATE 5 */}
      <section className="weather__date">
        <p className="weather__date-title">{days[date5]}</p>
        <img
          className="weather__icon"
          src={`/assets/weather-icons/${weatherData[32].weather[0].icon}.png`}
          alt="weather icon"
        />
        <div className="weather__temps">
          <p className="weather__temp">{tempMin[4]}</p>
          <p className="weather__temp">{tempMax[4]}</p>
        </div>
      </section>
    </div>
  );
}

export default Weather;

// Current Temp is {weatherData[0].main.temp} in {location}
