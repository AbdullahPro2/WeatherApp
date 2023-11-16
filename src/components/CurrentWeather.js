import React, { useState } from "react";
import sun from "../imgs/sun.png";
import cloud from "../imgs/cloud_sun.png";
import rain from "../imgs/rain.png";
import blueCloud from "../imgs/blue-cloud-icon-png.webp";

function CurrentWeather({ data }) {
  const [converter, setconverter] = useState(true);

  function handleConverter() {
    setconverter((prev) => !prev);
  }
  return (
    <div className="Current-Weather-Container">
      <div className="box-1 box">
        <h2 className="extended">Current Weather</h2>
        <div className="degree-converter">
          <p
            className={`centigrade ${converter ? "active" : ""}`}
            onClick={handleConverter}
          >
            C
          </p>
          <p
            className={`fahrenheit ${!converter ? "active" : ""}`}
            onClick={handleConverter}
          >
            F
          </p>
        </div>
      </div>
      <div className="box-2 box">
        <p className="current-weather-city">
          {data !== null ? data.city.name : "name"}
        </p>
        <div className="picture-degree">
          {data !== null && data.list[0].weather[0].main === "Clouds" ? (
            <img src={cloud} alt="cloud and sun" className="weather-image" />
          ) : data !== null && data.list[0].weather[0].main === "Rain" ? (
            <img src={rain} alt="cloud and sun" className="weather-image" />
          ) : (
            <img src={sun} alt="cloud and sun" className="weather-image" />
          )}
          <p>
            {Math.round(data !== null ? data.list[0].main.temp - 273.15 : "23")}
            °
          </p>
        </div>
        <p className="weather-status">
          {data !== null ? data.list[0].weather[0].main : "clear"}
        </p>
      </div>
      <div className="box-3 box">
        <p>
          Feels Like{" "}
          {data !== null
            ? Math.round(data.list[0].main.feels_like - 273.15)
            : "23"}
          °
        </p>
        <div className="arrows-dev">
          <p className="p-devs">
            <span className="icons-current-weather">&#x2193;</span>
            <span className="arrow">
              {data !== null
                ? Math.round(data.list[0].main.temp_max - 273.15 - 3)
                : "23"}
              °
            </span>
          </p>
          <p className="p-devs">
            <span className="icons-current-weather">&#x2191;</span>
            <span className="arrow">
              {data !== null
                ? Math.round(data.list[0].main.temp_min - 273.15)
                : "23"}
              °
            </span>
          </p>
        </div>
        <p className="p-devs">
          <img src={blueCloud} alt="blueCloud" className="blueCloud" />
          <span className="p-devs-text">Wind</span>
          <span className="p-devs-number">
            {" "}
            {data !== null ? Math.round(data.list[0].wind.speed) : "23"} ms/s
          </span>
        </p>{" "}
        <p className="p-devs">
          <span className="icons-current-weather">&#x1F4A7;</span>
          <span className="p-devs-text">Humadity </span>
          <span className="p-devs-number">
            {data !== null ? Math.round(data.list[0].main.humidity) : "23"} %
          </span>
        </p>
        <p className="p-devs">
          <span className="icons-current-weather">&#x1F4A8;</span>
          <span className="p-devs-text">Pressure</span>
          <span className="p-devs-number">
            {" "}
            {data !== null ? Math.round(data.list[0].main.pressure) : "23"} hPa
          </span>
        </p>
      </div>
    </div>
  );
}

export default CurrentWeather;
