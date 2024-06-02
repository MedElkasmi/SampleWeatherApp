import React from 'react';

function WeatherInfo({ weatherData }) {
  return (
    <div className="weather-info">
      <h2>{weatherData.name}</h2>
      <p>Temperature: {weatherData.main.temp} °C</p>
      <p>Humidity: {weatherData.main.humidity} %</p>
      <p>Condition: {weatherData.weather[0].description}</p>
    </div>
  );
}

export default WeatherInfo;
