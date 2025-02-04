import { router, Slot } from "expo-router";
import {ClerkProvider, useAuth} from '@clerk/clerk-expo'
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { tokenCache } from "@/storage/tokenCache";

const PUBLIC_CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;

function InitialLayout(){

  const{isSignedIn, isLoaded} = useAuth() // hook para verificar se o usuário esta logado ou se esta carregando

  useEffect(() => {
    if(!isLoaded) return // se não estiver carregado não segue

    if(isSignedIn){ //se o usuário está logado me direciona para a tela de home
      router.replace("/(auth)")
    } else {
      router.replace("/(public)") //se não está logado me direciona para a tela de login
    }
  },[isSignedIn])

  return isLoaded ? <Slot/> : ( // se carregado mostra o conteudo, caso contrário mostra o indicador de carregando
    <ActivityIndicator
      style={{flex: 1, justifyContent: "center", alignItems: "center"}}
    />
  )
}

export default function Layout() {
  return (

    <ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
        <InitialLayout/>
    </ClerkProvider>
  );
}
