
import React, {useLayoutEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { useRoute, useNavigation } from '@react-navigation/native';


export default function Sobre(){
    const route = useRoute()
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            title: route.params?.nome === '' ? 'Tela Sobre' : route.params?.nome
        })
    }, [navigation])  

    return(
        <View style={styles.container}>
            <Text>Tela Sobre</Text>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>e-mail: {route.params?.email}</Text>
            <Button title="Voltar" onPress={() => navigation.goBack()}/>
            <Button title='Tela Contatos'onPress={()=> navigation.navigate('Contato')}/>    
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