import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView} from 'react-native';
import Estilos from './estilos/style';
import Toque from './componentes/Toque'

export default function App1(){
  return(
    <SafeAreaView style={Estilos.conteiner}>
        <Text style={Estilos.textoTitulo}>Olá mundo</Text>
        <Text style={Estilos.textoPadrao}>Hello world</Text>
        <Toque/>
    </SafeAreaView>
  );
}; 