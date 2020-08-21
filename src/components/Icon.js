import React, { useContext } from 'react';
import Context from '../Context';

const Icon = () => {
  const { condition } = useContext(Context);

  var icon = '';

  switch (condition) {
    case "Clouds":
      icon = `./img/wi-cloudy.svg`;
      break;
    case "Clear":
      icon = `./img/wi-day-sunny.svg`;
      break;
    case "Haze":
      icon = `./img/wi-day-haze.svg`;
      break;
    case "Thunderstorm":
      icon = `./img/wi-thunderstorm.svg`;
      break;
    case "Drizzle":
      icon = `./img/wi-sprinkle.svg`;
      break;
    case "Rain":
      icon = `./img/wi-rain.svg`;
      break;
    case "Snow":
      icon = `./img/wi-snow.svg`;
      break;
    case "Squall":
      icon = `./img/wi-windy.svg`;
      break;
    default:
      icon = `./img/wi-day-sunny.svg`;
      break;
  }

  return (
    <div className="icon">
      <img
        src={icon}
        alt="windy icon"
        className="icon" />
    </div>
  );
}

export default Icon;
