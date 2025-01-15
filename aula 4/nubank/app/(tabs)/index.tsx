import { Image, StyleSheet, Platform, Text, View, TextInput } from 'react-native';
import { vars } from 'nativewind';
import {theme} from "../../utils/theme";
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Logo } from '@/components/logo';
import {CustomButton} from'@/components/custom-button'

export default function HomeScreen() {

  const customVars ={
    "--color-personalizada": "yellow"
  }

  return (
    
    // <View className='mt-10 justify-center' style={vars(theme)}>
    //   <Text className='text-3xl text-primario'>Titulo</Text>
    //   <Text className='text-xl text-secundario'>Titulo</Text>
    //   <TextInput className='h-11 bg-red-300 focus:bg-black' />
    // </View>

    <View className='h-screen items-center justify-center'>
      <Logo />
      <View className='w-full px-5 mt-20'>
        <CustomButton label={"Cadastra-se"} onPress={() => {}} />
        <CustomButton label={"Faça Login"} onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
