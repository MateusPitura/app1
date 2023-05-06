import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

export default function App1(){

  const [curso,setCurso] = useState("")

  const armazenar = (chave: any, valor: any)=>{
    AsyncStorage.setItem(chave, valor)
  }

  const buscar = async(chave: any)=>{
    const valor = await AsyncStorage.getItem(chave);
    setCurso(valor);
  }

  return(
      <View>
        <Text>Olá mundo {curso}</Text>
        <Button
          title="Armazenar"
          onPress={()=>
            armazenar("peso", "63")
          }
        />
        <Button
          title="Exibir"
          onPress={()=>
            buscar("peso")
          }
        />
      </View>
    )
}
