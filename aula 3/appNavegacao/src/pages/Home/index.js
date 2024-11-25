
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    function navegaSobre(){
        navigation.navigate("Sobre",{nome: 'João', email: 'joao@gmail.com'})
    }


    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button title="Ir para Sobre" onPress={navegaSobre}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})