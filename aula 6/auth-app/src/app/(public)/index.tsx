import { Button } from '@/components/Button';
import {View, Text, StyleSheet, Linking } from 'react-native';
import {router} from 'expo-router'
import * as WebBrowser from 'expo-web-browser';
import { useOAuth } from '@clerk/clerk-expo';
import { useEffect, useState } from 'react';
import * as Liking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();

export default function SignIn() {

  const [isLoading, setIsLoading] = useState(false)
  const googleAuth = useOAuth({strategy:"oauth_google"})

    async function signInWithGoogle(){
        try{
          setIsLoading(true)
          const redirectUrl = Liking.createURL("/")
          const oAuthFlow = await googleAuth.startOAuthFlow({redirectUrl})

          if(oAuthFlow.authSessionResult?.type === 'success'){
            if(oAuthFlow.setActive){
              await oAuthFlow.setActive({session: oAuthFlow.createdSessionId})
            }
          } else{
            setIsLoading(false)
          }

        }catch(error){
            console.log(error)
            setIsLoading(false)
        }
    }

    useEffect(() => {
      WebBrowser.warmUpAsync()
      return () =>{
        WebBrowser.coolDownAsync()
      }
    },[])

  return (

   <View style={styles.container}> 
      <Text style={styles.text}>Entrar</Text>
      <Button
        icon='logo-google'
        title='Entrar com o Google'
        onPress={signInWithGoogle}
        isLoading={isLoading}
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