import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import C2 from './componentes/Caixas';
import Estilos from './estilos/style';

const dobro=(n: number)=>n*2

const soma = (n1: number,n2: number)=>{
  var soma=n1+n2;
  return soma;
}

export default function App1(){
  var vexibir=false;
  return(
    <View style={Estilos.conteiner}>
      <Text>{dobro(2)}, {soma(2,4)}</Text>
      {/*<Image
       source={require('./assets/dog.png')}
        style={Estilos.logo}
      />*/}
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