import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import C2 from './componentes/Caixas';
import Estilos from './estilos/style';

export default function App1(){
  return(
    <View style={Estilos.conteiner}>
      <C2/>
      <Text style={Estilos.textoTitulo}>Olá mundo</Text>
      <Text style={Estilos.textoPadrao}>Hello world</Text>
   </View>
  );
};