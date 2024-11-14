import React, {useState, useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, SafeAreaView,Keyboard } from 'react-native';
import api from './src/services/api';

export default function App() {

  const [cep, setCep] = useState('');
  const inputRef = useRef(null);
  const [cepUser, setCepUser] = useState(null);

  function limpar(){
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }

  async function buscar(){
    if(cep == ''){
       alert('Digite um CEP válido');
       setCep('');
       return // para a execução da função
    }
    try{
      const response = await api.get(`/${cep}/json`);
      console.log(response.data);
      setCepUser(response.data);
      Keyboard.dismiss(); // esconde o teclado
    } catch(error){
     console.log('Erro ao buscar o CEP: '+error);
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.text}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o CEP"
          value={cep}
          onChangeText={(texto)=>setCep(texto)}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>
      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.btn,{backgroundColor: '#0782F9'}]} onPress={buscar}>
              <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn,{backgroundColor: '#cd3456'}]} onPress={limpar}>
              <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser &&       
        <View style={styles.resultado}>
          <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
          <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
        </View>
      }
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 25,
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  areaBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  btn: {
    height: 70,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    color: '#FFF',
    fontSize: 22,
  },
  resultado: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
