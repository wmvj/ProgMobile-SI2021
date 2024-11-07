import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View, RootTagContext } from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./assets/biscoito.png'),
    }
    
    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

    this.frases=[
      'Siga os bons e aprenda com eles.', 
      'O bom-senso vale mais do que muito conhecimento.', 
      'O riso é a menor distância entre duas pessoas.', 
      'Deixe de lado as preocupações e seja feliz.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'Acredite em milagres, mas não dependa deles.',
      'A maior barreira para o sucesso é o medo do fracasso.'
    ]
  }
  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./assets/biscoitoAberto.png'),
    })
  }

  
  render(){
    return (
    <View style={styles.container}>
     <Image 
      source={this.state.img}
      style={styles.img}
     />
    
    <Text style={styles.textoFrase}> {this.state.textoFrase} </Text>

    <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
      <View style={styles.btnArae}>
        <Text style={styles.btnTexto}>Quebrar biscoito</Text>
      </View>
    </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img:{
    width: 250,
    height: 250,
  },

  textoFrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin:30,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },

  btnArae:{
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }

});

export default App;