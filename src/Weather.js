import React from "react";
import "./Weather.css";

export default function Weather(){
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
            <div>
              <input type="submit" value="Search" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-3">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sun"
            ></img>
            -3°C
          </div>
          <div className="col-3">
            <ul className="weatherStats">
              <li>Precipitation: 15%</li>
              <li>Humidity: 63%</li>
              <li>Wind: 16 km/h</li>
            </ul>
          </div>
          <div className="col-6 justify-content-end">
            <h1>Toronto</h1>
            <ul>
              <li>Tuesday, 9:00 p.m. </li>
              <li>Clear</li>
            </ul>
          </div>
        </div>
      </div>
    );
}