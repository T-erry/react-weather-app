import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="location">
        <h1>{props.data.city}</h1>
      </div>
      <div className="time">
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img src={props.data.iconUrl} alt={props.data.description}></img>
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default WeatherInfo;
