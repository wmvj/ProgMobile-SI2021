import {Text, View, TextInput, TouchableOpacity } from 'react-native';

import { styles } from './style';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>
      <Text style={styles.eventDate}>
        Terça-feira, 21 de janeiro de 2025
      </Text>
      <TextInput
       style={styles.input}
       placeholder='Nome do participante'
       placeholderTextColor="#6B6B6B"
      />
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>
            +
        </Text>
      </TouchableOpacity>

      
    </View>
  );
}