import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
import Estilos from './estilos/style';
import Cabecalho from './estilos/cabecalho-style';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const Pilha=createStackNavigator();

function TelaHome({navigation}: any){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Home</Text>
      <Button
        title="Tela Canal"
        onPress={()=>navigation.navigate("Canal")}
      />
      <Button
        title="Tela Cursos"
        onPress={()=>navigation.navigate("Cursos")}
      />
    </View>
  )
}

function TelaCanal({navigation}: any){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Canal</Text>
      <Button
        title="Tela Home"
        onPress={()=>navigation.navigate("Home")}
      />
      <Button
        title=""
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

function TelaCursos({navigation}: any){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
      <Button
        title="React Native"
        onPress={()=>navigation.navigate("ReactNative", {aulas:100, autor:'Bruno'})}
      />
    </View>
  )
}

function TelaReactNative({route, navigation}: any){
  const {aulas} = route.params;
  const {autor} = route.params;
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Tela Cursos</Text>
      <Text>Aulas: {aulas}</Text>
      <Text>Autor: {autor}</Text>
      <Button
        title="Home"
        onPress={()=>navigation.navigate("Home")}
      />
      <Button
        title=""
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}

export default function App1(){
  return(
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen
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
        <Pilha.Screen
          name="Canal"
          component={TelaCanal}
          options={{title:'Tela Canal'}}
        />
        <Pilha.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:'Tela Cursos'}}
        />
        <Pilha.Screen
          name="ReactNative"
          component={TelaReactNative}
          options={{
            title:'Tela React Native',
            headerStyle:{
              backgroundColor:'#008',
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold',
            }
          }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  );
}; 