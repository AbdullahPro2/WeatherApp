import React from "react";

import NextDay from "./NextDay";

function NextDaysWeather({ data, changeDegree }) {
  if (data !== null) {
    const list = data.list;
    const indicesToSelect = [6, 13, 20, 27, 34];

    const selectedElements = indicesToSelect.map((index) => list[index]);
    return (
      <div className="next-day-weather">
        <h2 className="extended">Extended Forecast</h2>
        <div className="next-day-main">
          {selectedElements.map((el, index) => (
            <NextDay
              data={el}
              key={el.dt}
              index={index}
              changeDegree={changeDegree}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default NextDaysWeather;
