import React, { useState } from "react";
import "./WeatherTemperature.css";

function WeatherTemperature(props) {
  function showCelsuius(event) {
    event.preventDefault();
    setUnits("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }
  const [units, setUnits] = useState("celsius");
  if (units === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)} </span>{" "}
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)} </span>{" "}
        <span className="units">
          {" "}
          <a href="/" onClick={showCelsuius}>
            °C
          </a>
          | °F
        </span>
      </span>
    );
  }
}
export default WeatherTemperature;
