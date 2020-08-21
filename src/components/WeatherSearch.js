import React, {useContext} from 'react';

import Context from '../Context';

const WeatherSearch = () => {
  const { api_call } = useContext(Context);

  return (  
    <div className="weather-search">
      <form onSubmit={api_call} className="search-form">
        <input
          type="text"
          name="location"
          placeholder="Enter city"
          autoComplete="off"
          className="search-input"
        />
        <button className="search-button"><i className="fa fa-plus" aria-hidden="true"></i></button>
      </form>
    </div>
  );
}
 
export default WeatherSearch; 