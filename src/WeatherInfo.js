import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcons from "./WeatherIcons";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="location">
        <h1>{props.data.city}</h1>
      </div>
      <div className="time">
        <div className="row">
          <div className="col-sm-9">
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
              <li>Humidity: {props.data.humidity}%</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <WeatherIcons code={props.data.icon} size={52} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default WeatherInfo;
