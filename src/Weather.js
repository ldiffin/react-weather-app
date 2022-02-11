import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Toronto</h1>
      <ul className="mb-2">
        <li>Tuesday, 9:00 p.m. </li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sun"
            />
          <span className="temperature align-middle">-3</span>
          <span className="units">°C</span>
                </div>
        <div className="col-6">
          <ul className="weatherStats">
            <li>Precipitation: 15%</li>
            <li>Humidity: 63%</li>
            <li>Wind: 16 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
