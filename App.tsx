import React, {useState} from 'react';
import {View, Text, SafeAreaView, StatusBar, Button} from 'react-native';
import Estilos from './estilos/style';

export default function App1(){

  const [modo,setModo]=useState("light-content")

  return(
    <SafeAreaView style={Estilos.conteiner}>
      <StatusBar
        backgroundColor="pink"  
        barStyle={modo}
        hidden={false}
        animated={true}
        translucent={true}
      />
      <Text style={Estilos.textoTitulo}>Olá mundo</Text>
      <Text style={Estilos.textoPadrao}>Hello world</Text>
      <Button
        title="Modo escuro"
        onPress={()=>{setModo("dark-content")}}
      />
    </SafeAreaView>
  );
}; 