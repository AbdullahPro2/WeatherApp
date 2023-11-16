import React from "react";
import sun from "../imgs/sun.png";
import clound from "../imgs/cloud_sun.png";
import rain from "../imgs/rain.png";

function NextDay({ data, index }) {
  const day = new Date("10-15-2023");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="">
      <div className="next-day-div">
        <p>{days[index]}</p>
        {data !== null && data.weather[0].main === "Clouds" ? (
          <img src={clound} alt="Clound and sun" className="next-day-image" />
        ) : data !== null && data.weather[0].main === "Rain" ? (
          <img src={rain} alt="Clound and sun" className="next-day-image" />
        ) : (
          <img src={sun} alt="Clound and sun" className="next-day-image" />
        )}
        <p>{data.weather[0].main}</p>
        <p>
          {data !== null ? Math.round(data.main.temp_max - 273.15) : "23"}
          °/{data !== null ? Math.round(data.main.temp_min - 273.15 - 3) : "23"}
          °
        </p>
      </div>
    </div>
  );
}

export default NextDay;
