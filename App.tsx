import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Estilos from './estilos/style';
import CarroC from './componentes/CarroC';

export default function App1(){
  return(
    <View style={Estilos.conteiner}>
        <Text style={Estilos.textoTitulo}>Olá mundo</Text>
        <Text style={Estilos.textoPadrao}>Hello world</Text>
    </View>
  );
};