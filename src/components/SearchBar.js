import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter city name..."
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <Button title="Search" onPress={onSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
});

export default SearchBar;
