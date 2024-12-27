import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherCard = ({ weather }) => {
  if (!weather) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weather.name}</Text>
      <Image
        style={styles.icon}
        source={{
          uri: `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        }}
      />
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    width: 100,
    height: 100,
  },
  temperature: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default WeatherCard;
