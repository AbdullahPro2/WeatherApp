import React, { useEffect, useState } from "react";
import "./app.css";
import SearchBar from "./components/SearchBar";
import CurrentWeather from "./components/CurrentWeather";
import NextDaysWeather from "./components/NextDaysWeather";
import Loader from "./components/Loader";

function App() {
  const KEY = "53f1ef0e2a3e14fd203c25c527e770aa";
  document.title = "Weather App";

  const [inputValue, setInputValue] = useState("Mulhouse");
  const [weatherData, setWeatherData] = useState(null);
  const [loader, setLoader] = useState(false);

  useEffect(
    function () {
      async function fetchWeather() {
        setLoader(true);
        if (inputValue) {
          try {
            const resCordinates = await fetch(
              `http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&appid=${KEY}`
            );
            if (!resCordinates.ok) {
              throw new Error(
                "Failed to fetch coordinates, No such place found"
              );
            }

            const cordinates = await resCordinates.json();
            const { lat, lon } = cordinates[0];

            const res = await fetch(
              `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${KEY}`
            );
            if (!res.ok) {
              throw new Error("Failed to fetch weather data");
            }
            const data = await res.json();
            setLoader(false);
            setWeatherData(data);
          } catch (err) {
            console.error(err);
          }
        }
      }
      fetchWeather();
    },
    [inputValue]
  );

  if (loader) return <Loader />;

  if (loader === false)
    return (
      <div className="app">
        <h1 className="heading">ReactWeather</h1>

        <SearchBar
          value={inputValue}
          onSetValue={setInputValue}
          size={"90%"}
          className={"inputBar"}
        />
        <CurrentWeather data={weatherData} />
        <NextDaysWeather data={weatherData} />
      </div>
    );
}

export default App;
