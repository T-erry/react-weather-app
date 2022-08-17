import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  // if the coordinates change
  //setLoaded false
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function showResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyforecast, index) {
            if (index < 6) {
              return (
                <div className="col-sm-2" key={index}>
                  <WeatherForecastDay data={dailyforecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "4f565cd2b2d71425ef1d84ca6fcf5603";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
    return null;
  }
}
export default WeatherForecast;
