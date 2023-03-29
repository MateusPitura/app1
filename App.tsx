import React from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import Lp from './componentes/ListaPlana';
import Estilos from './estilos/style';

const imgbg1='./assets/imagem-de-fundo.png';

export default function App1(){
  return(
    <View style={Estilos.conteiner}>
      <ImageBackground 
        source={require(imgbg1)}
        style={Estilos.imagemFundo}
      >
        <Text style={Estilos.textoTitulo}>Olá mundo</Text>
        <Text style={Estilos.textoPadrao}>Hello world</Text>
        {/*<Lp/>*/}
      </ImageBackground>
   </View>
  );
};