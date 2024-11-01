import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'; 

class App extends Component{
  render(){
    let nome = 'Turma SI2021';
    let img = 'https://picsum.photos/200'

    return(
      <View>
        <Text>Olá Mundo!!!!</Text>
        <Text>Meu Primeiro App</Text>    
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Seja bem vindo!
        </Text>
        <Image 
          source={{ uri: img }}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ fontSize: 30 }}> {nome} </Text>
      </View>
    );
  }
}

export default App;
