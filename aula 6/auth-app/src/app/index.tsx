import {View, Text, StyleSheet, Linking } from 'react-native';

export default function SignIn() {
  return (

   <View style={styles.container}> 
      <Text style={styles.text}>Entrar</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    gap: 12
},
text:{
    fontSize: 12,
    fontWeight: 'bold'
}
})