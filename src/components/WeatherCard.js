import React, { useContext } from 'react';
import Moment from "react-moment";
import Context from '../Context';
import Icon from './Icon';

const WeatherCard = () => {
  const date = new Date();

  const {weather, city, condition } = useContext(Context);
  const { temp, temp_max, temp_min  } = weather;
  
  return (
      
      <div className="weather-card">
        <div className="date-city">
          {/*  */}
          <p className="current-date"><Moment format="dddd, MMMM Do YYYY">{date}</Moment></p>
          <h4 className="current-city">{city}</h4>
        </div>
        <div className="weather-info">
            <Icon />
            <div className="temperature">
              <h2 className="current-temperature">{Math.round(temp)}<span className="fahrenheit">°F</span></h2>
            </div>
            <div className="description">
              <div className="current-condition">Today: {condition}</div>
            </div>
            <div className="high-low">
              <div className="temp-high"><i className="fas fa-arrow-up"></i> {Math.round(temp_max)}°F</div>
              <div className="temp-low"><i className="fas fa-arrow-down"></i> {Math.round(temp_min)}°F</div>
            </div>
        </div>
      </div>
  );
}
 
export default WeatherCard;