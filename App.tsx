import React from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import Estilos from './estilos/style';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Pilha=createStackNavigator();

function TelaHome({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <Button
        title="Tela Canal"
        onPress={()=>navigation.navigate("Canal")}
      />
      <Button
        title="Voltar"
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

function TelaCanal({navigation}){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Canal</Text>
      <Button
        title="Tela Home"
        onPress={()=>navigation.navigate("Home")}
      />
    </View>
  )
}

export default function App1(){
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Canal">
        <Pilha.Screen
          name="Home"
          component={TelaHome}
          options={{title:'Tela Inicial'}}
        />
        <Pilha.Screen
          name="Canal"
          component={TelaCanal}
          options={{title:'Tela Canal'}}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}; 