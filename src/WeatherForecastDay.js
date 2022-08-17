import React from "react";
import WeatherIcons from "./WeatherIcons";

function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = days[date.getDay()];

    return day;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={36} />

      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maxTemperature()}</span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
export default WeatherForecastDay;
