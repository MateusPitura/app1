import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Estilos from './estilos/style';

const imgbg1='./assets/imagem-de-fundo.png';

export default function App1(){
  
  const [ligado,setLigado]=useState(false);

  return(
    <View style={Estilos.conteiner}>
      <Button
        title={ligado?"Desligar":"Ligar"}
        onPress={setLigado(!ligado)}
      />
      <View>
        <Text style={Estilos.textoTitulo}>Olá mundo</Text>
        <Text style={Estilos.textoPadrao}>Hello world</Text>
      </View>
    </View>
  );
};