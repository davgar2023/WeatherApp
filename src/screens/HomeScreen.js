import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SearchBar from '../components/SearchBar';
import WeatherCard from '../components/WeatherCard';
import { fetchWeather,fetchWeatherByCoordinates } from '../utils/api';

const HomeScreen = () => {
 
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // Request location permission and fetch weather for current location
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show weather information.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
          alert('Location permission denied');
        }
      } else {
        getLocation();
      }
    };

    const getLocation = () => {
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
         
          const data = await fetchWeatherByCoordinates(latitude, longitude);
          setWeather(data);
        },
        (error) => {
          console.error(error);
          alert('Failed to fetch location');
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    };

    requestLocationPermission();
  }, []);

  const handleSearch = async () => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (error) {
      alert('Error fetching weather data.');
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar city={city} setCity={setCity} onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </View>
  );
};

const COLORS = {
  background: '#f0f0f0',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    padding: 10,
  },
});

export default HomeScreen;
