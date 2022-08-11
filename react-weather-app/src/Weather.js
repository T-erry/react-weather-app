import React, { useState } from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  function displayWeather(response) {
    console.log(response);
    setWeatherData({
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-sm-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-sm-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary  w-100"
              />
            </div>
          </div>
        </form>
        <div className="location">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="time">
          <ul>
            <li>
              <FormattedDate date={weatherData.date} />
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <img src={weatherData.iconUrl} alt={weatherData.description}></img>
            <span className="temperature">
              {Math.round(weatherData.temperature)}{" "}
            </span>{" "}
            <span className="units">°C</span>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = `3d0b4f1fed2da565fc23a9bf4c0d1378`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);

    return "Loading...";
  }
}
export default Weather;
