import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
import Estilos from './estilos/style';
import Cabecalho from './estilos/cabecalho-style';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Guias=createBottomTabNavigator();

function TelaHome({navigation}: any){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Home</Text>
    </View>
  )
}

function TelaCanal({navigation}: any){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Canal</Text>
    </View>
  )
}

function TelaCursos({navigation}: any){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
    </View>
  )
}

export default function App1(){
  return(
    <NavigationContainer>
      <Guias.Navigator initialRouteName="Canal">
        <Guias.Screen
          name="Home"
          component={TelaHome}
          options={{
            title:'Tela Inicial',
            headerStyle:{
              backgroundColor:'#008',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            },
            headerRight:()=>(
              <Button
                title="Cursos"
                color="#000"
                onPress={()=>Alert.alert('Botão Clicado')}
              /> 
            ),
          }}
        />
        <Guias.Screen
          name="Canal"
          component={TelaCanal}
          options={{title:'Tela Canal'}}
        />
        <Guias.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:'Tela Cursos'}}
        />
      </Guias.Navigator>
    </NavigationContainer>
  );
}; 