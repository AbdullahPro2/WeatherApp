import React from "react";
import sun from "../imgs/sun.png";
import clound from "../imgs/cloud_sun.png";
import rain from "../imgs/rain.png";

function NextDay({ data, index, changeDegree }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  console.log(changeDegree);
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
        {!changeDegree && (
          <p>
            {Math.round(data.main.temp_max - 273.15)}°/
            {Math.round(data.main.temp_min - 273.15 - 3)}°
          </p>
        )}
        {changeDegree && (
          <p>
            {Math.round(((data.main.temp_max - 273.15) * 9) / 5 + 32)}°/
            {Math.round(((data.main.temp_min - 3 - 273.15) * 9) / 5 + 32)}°
          </p>
        )}
      </div>
    </div>
  );
}

export default NextDay;
