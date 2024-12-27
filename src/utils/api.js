import axios from 'axios';

// Base URL for the OpenWeatherMap API
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

const API_KEY = 'your_openweathermap_api_key'; // Replace with your API key

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching weather data.');
  }
};

export const fetchForecast = async (city) => {
  try {
    const response = await axios.get(
      `${BASE_URL}forecast?q=${city}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    throw new Error('Error fetching forecast data.');
  }
};
