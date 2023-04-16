import React, { Component } from 'react';
import {View, Text, Button} from 'react-native';
import Globais from './componentes/Globais';

export default class App1 extends Component{

  nome=Globais.nome;
  canal = Globais.canal;
  numero = Globais.num;

  render(){
    return(
      <View>
        <Text>Hello world {this.nome}</Text>
        <Text>Hello world {this.canal}</Text>
        <Text>Hello world {this.numero}</Text>
      </View>
    )
  }
}