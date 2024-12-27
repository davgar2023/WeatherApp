import axios from 'axios';
import { REACT_APP_WEATHER_API_KEY, REACT_APP_API_BASE_URL } from '@env';

//console.log(REACT_APP_WEATHER_API_KEY);

// Base URL for the OpenWeatherMap API
//const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

//const API_KEY = 'your_openweathermap_api_key'; // Replace with your API key

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_BASE_URL}weather?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data.');
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_BASE_URL}forecast?q=${city}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching forecast data.');
  }
};

// Fetch weather data by coordinates
export const fetchWeatherByCoordinates = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${REACT_APP_API_BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${REACT_APP_WEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather by coordinates');
  }
};
