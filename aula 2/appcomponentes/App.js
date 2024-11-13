import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {

  // useRef
  const nomeInput = useRef(null)
  
  // useState
  const [nome, setNome] = useState('')
  const [input, setInput] = useState('')

  // funcao useState
  function alterarNome(){
    setNome(input)
  }

  // comnponenteDidtMount
  useEffect(()=>{
    async function getStorage(){
      const nomeStorage = await AsyncStorage.getItem('nomes')
      if(nomeStorage !== null){
        setNome(nomeStorage)
      }
    }
    getStorage()
  },[])

  // componenteDidUpdate
  useEffect(() =>{
    async function saveStorage(){
      await AsyncStorage.setItem('nomes', nome)
    }
    saveStorage()
  },[nome])

  // const letrasNome = nome.length
  // console.log(letrasNome)

  const letrasNomeMemo = useMemo(()=>{
    console.log('Mudou letra')
    return nome.length
  },[nome])


  function novoNome(){
    nomeInput.current.focus()
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu nome"
        value={input}
        onChangeText={(texto)=>setInput(texto)}
        ref={nomeInput} 
      />
      <TouchableOpacity style={styles.button} onPress={alterarNome}>
        <Text style={styles.textBtn}>Altera Nome</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{nome}</Text>
      <Text style={styles.text}>Tem {letrasNomeMemo} letras</Text>
      <TouchableOpacity style={styles.button} onPress={novoNome}>
        <Text style={styles.textBtn}>Novo Nome</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  },
  input:{
    height: 40,
    borderWidth: 1,
    borderColor: '#000',
    margin: 20,
    padding: 20,
  },
  button:{
    backgroundColor: '#222',
    alignItems: 'center',
  },
  textBtn:{
    color: '#fff',
    padding: 10,
  },
  text:{
    color: '#000',
    fontSize: 35,
  }
 
});