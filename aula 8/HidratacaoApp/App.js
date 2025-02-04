import React, { useEffect, useState } from 'react';
import { Button, Text, View, FlatList, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function requestPermissions() {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Permissão para notificações não concedida.');
      }
    }

    requestPermissions();
  }, []);

  async function scheduleNotification() {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hora de Beber Água!',
        body: 'Não se esqueça de se hidratar.',
        sound: 'default',
      },
      trigger: { seconds: 10 }, // Notificação em 10 segundos
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>App de Hidratação</Text>
      <Button title="Agendar Lembrete" onPress={scheduleNotification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});