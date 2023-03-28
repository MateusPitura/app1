import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Lp from './componentes/ListaPlana';
import Estilos from './estilos/style';

export default function App1(){
  return(
    <View style={Estilos.conteiner}>
      <Text style={Estilos.textoTitulo}>Olá mundo</Text>
      <Text style={Estilos.textoPadrao}>Hello world</Text>
      <Lp/>
   </View>
  );
};