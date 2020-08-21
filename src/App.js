import React, {useState} from 'react';
import axios from 'axios';

import './App.css';

import Wrapper from './components/Wrapper';
import WeatherCard from './components/WeatherCard';
import WeatherSearch from './components/WeatherSearch';
import Error from './components/Error';

import Context from './Context';

const App = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();
  const [condition, setCondition] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    
    var location = e.target.elements.location.value;
    if (!location) {
      return setError("Please enter a city."), setWeather(null);
    } else {
      e.target.elements.location.value = '';
    }

    const API_KEY = 'd233164e97453cc1c5f7e6ee5f3a4b3e';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=imperial`;
    const request = axios.get(url);
    const response = await request;

    setWeather(response.data.main);
    setCity(response.data.name);
    setCondition(response.data.weather[0].description);
    setError(null);
    console.log(response);
  }
    
  return (  
    <Wrapper>
      <Context.Provider value={{ api_call: api_call, weather: weather, city: city, condition: condition }}>
        <WeatherSearch />
        { error && <Error error={error} /> }
        {weather && <WeatherCard />}
      </Context.Provider>
    </Wrapper>
  );
}
 
export default App;