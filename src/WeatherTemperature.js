import React from "react";

function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)} </span>{" "}
      <span className="units">°C </span>
    </span>
  );
}
export default WeatherTemperature;
