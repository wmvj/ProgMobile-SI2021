import React, { useState, useEffect, useMemo, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = 'fc4a43eefba5efc650ca3ef8c6d2c2f7';

export default function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const fetchWeather = async () => {
    if (latitude.trim() === '') {
      setError('Por favor, insira uma latitude.');
      return;
    } else if (longitude.trim() === '') {
      setError('Por favor, insira uma longitude.');
      return;
    }
    try {
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
      );
      setWeatherData(response.data);
    } catch (err) {
      setError('Não foi possível buscar os dados. Verifique a cidade.');
    }
  };

  useEffect(() => {
    inputRef.current?.focus(); // Foca no campo de entrada automaticamente
  }, []);

  const weatherDetails = useMemo(() => {
    if (!weatherData) return null;
    return {
      temperature: weatherData.main.temp,
      humidity: weatherData.main.humidity,
      description: weatherData.weather[0].description,
    };
  }, [weatherData]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Clima</Text>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder="Digite a latitude"
        value={latitude}
        onChangeText={setLatitude}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a longitude"
        value={longitude}
        onChangeText={setLongitude}
      />

      <Button title="Buscar Clima" onPress={fetchWeather} />
      {error && <Text style={styles.error}>{error}</Text>}
      {weatherDetails && (
        <View style={styles.result}>
          <Text>Temperatura: {weatherDetails.temperature}°F</Text>
          <Text>Umidade: {weatherDetails.humidity}%</Text>
          <Text>Descrição: {weatherDetails.description}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 35,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  result: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
