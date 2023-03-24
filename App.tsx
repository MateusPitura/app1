import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import C2 from './componentes/Caixas';
import Estilos from './estilos/style';

export default function App1(){
  var vexibir=false;
  return(
    <View style={Estilos.conteiner}>
      <Image
        source={require()}
      />
      <C2 exibir={vexibir}/>
      <Text style={Estilos.textoTitulo}>Olá mundo</Text>
      <Text style={Estilos.textoPadrao}>Hello world</Text>
      {vexibir && <Text>Hello world</Text>}
   </View>
  );
};