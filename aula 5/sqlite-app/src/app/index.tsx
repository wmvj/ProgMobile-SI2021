import {View, Button, Text} from 'react-native';
import {router} from 'expo-router';
import {useState} from 'react';
import {Input} from "@/components/Input"

export default function Index() {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState([])

    async function create() {
        try {
            
        } catch (error) {
            
        }
    }


    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Input
                placeholder='Nome'
                onChangeText={setName}
                value='name'
            />
            <Input
                placeholder='Quantidade'
                onChangeText={setQuantity}
                value='quantity'
            />

            <Button title='Salvar' onPress={create} />

        </View>
    )
}
