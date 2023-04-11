import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Estilos from './estilos/style';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Pilha=createStackNavigator();

export default function App1(){
  return(
    <NavigationContainer>
      <View><Text>Oi</Text></View>
    </NavigationContainer>
  );
}; 