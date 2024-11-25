import React from 'react';
import { View, Text, Button } from 'react-native';

import { useNavigation, StackActions } from '@react-navigation/native';

export default function Contato(){
    const navigation = useNavigation();

    function direcionarParaHome(nome){
        navigation.dispatch(
            StackActions.popToTop() )
    }

    return(
        <View>
            <Text>Pagina Contato</Text>
            <Button title="Ir para Home" onPress={direcionarParaHome}/>
        </View>

    )
}