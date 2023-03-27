import React from 'react';
import {StyleSheet, View, Text, Image, Button, Alert} from 'react-native';
import C2 from './componentes/Caixas';
import Estilos from './estilos/style';

const msg=()=>{Alert.alert("Olá", "mundo")};

export default function App1(){
  var vexibir=false;
  return(
    <View style={Estilos.conteiner}>
      <Button
        title="Compre agora"
        onPress={msg}
      />
      <Image 
        source={{
          uri:'http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png'
        }}
        style={{width:250, height:250}}
      />
      <Text style={Estilos.textoTitulo}>Olá mundo</Text>
      <Text style={Estilos.textoPadrao}>Hello world</Text>
      {vexibir && <Text>Hello world</Text>}
   </View>
  );
};