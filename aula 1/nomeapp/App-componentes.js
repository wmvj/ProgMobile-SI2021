import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'; 

class App extends Component{
  render(){
    let nome = 'Turma SI2021';

    return(
      <View>
        <Text>Olá Mundo!!!!</Text>
        <Text>Meu Primeiro App</Text>    
        <Text style={{ color: '#FF0000', fontSize: 25, margin: 15 }}>
          Seja bem vindo!
        </Text>

        <Fotos largura={400} altura={200} fulano='Foto'/>
       
      </View>
    );
  }
}


class Fotos extends Component{
  render(){

    let img = 'https://picsum.photos/200';

    return(
      <View>
        <Image 
          source={{ uri: img }}
          style={{ width: this.props.largura, height: this.props.altura }}
      />
      <Text> {this.props.fulano} </Text>
     </View>
    );
  }
}

export default App;


