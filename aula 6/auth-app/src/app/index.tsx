import { Button } from '@/components/Button';
import {View, Text, StyleSheet, Linking } from 'react-native';

export default function SignIn() {

    async function signInWithGoogle(){
        try{
            await Linking.openURL('https://www.google.com')
        }catch(error){
            console.log(error)
        }
    }

  return (

   <View style={styles.container}> 
      <Text style={styles.text}>Entrar</Text>
      <Button
        icon='logo-google'
        title='Entrar com o Google'
        onPress={signInWithGoogle}
        isLoading={false}
      />

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