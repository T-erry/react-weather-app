import React from "react";
import "./Weather.css";

function Weather() {
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
        <h1>Tanzania</h1>
      </div>
      <div className="time">
        <ul>
          <li>Tuesday 14:00</li>
          <li>Mostly cloudy</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          ></img>
          <span className="temperature">10 </span>{" "}
          <span className="units">°C</span>
        </div>
        <div className="col-sm-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 46%</li>
            <li>Wind: 24 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Weather;
