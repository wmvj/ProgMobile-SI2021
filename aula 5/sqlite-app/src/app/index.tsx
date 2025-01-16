import {View, Button, Alert, Text} from 'react-native';
import {router} from 'expo-router';
import {useState} from 'react';
import {Input} from "@/components/Input"

import {useProductDatabase} from "@/database/useProductDatabase";

export default function Index() {

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")
    const [products, setProducts] = useState([])

    const productDatabase = useProductDatabase()

    async function create() {
        try {
            if (isNaN(Number(quantity))) {
                return Alert.alert('Quantidade precisa ser um número!')
            }

            const response = await productDatabase.create({
                name,
                quantity: Number(quantity)
            })

            Alert.alert('Produto cadastrado com o ID: ' + response.insertRowId)

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View style={{flex: 1, justifyContent: 'center', padding: 32, gap: 16}}>
            <Input
                placeholder='Nome'
                onChangeText={setName}
                value={name}
            />
            <Input
                placeholder='Quantidade'
                onChangeText={setQuantity}
                value={quantity}
            />

            <Button title='Salvar' onPress={create} />

        </View>
    )
}
