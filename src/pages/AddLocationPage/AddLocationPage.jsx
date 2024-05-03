import React, { useState } from 'react';
import * as userService from '../../utilities/users-service';
import axios from 'axios';

export default function AddLocationPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, getWeatherData] = useState(null);


  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/api/weather`);
      console.log(response)
      getWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <>
      <h1>Add Location</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search location"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {weatherData && (
        <div>
          <h2>Weather Data</h2>
          <p>Temperature: {weatherData.current.temp_f}F</p>
          <p>Condition: {weatherData.current.condition.text}</p>
        </div>
      )}
      <p>Search Term: {searchTerm}</p>
    </>
  );
}
