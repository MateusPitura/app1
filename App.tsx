import React from 'react';
import {View, Text, SafeAreaView, Button, Alert} from 'react-native';
import Estilos from './estilos/style';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TelaHomeExterna from './componentes/TelaHome';

const Gavetas=createDrawerNavigator();

function TelaHome({navigation}: any){
  return(
    <TelaHomeExterna nav={navigation}/>
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
      <Gavetas.Navigator initialRouteName="Canal">
        <Gavetas.Screen
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
        <Gavetas.Screen
          name="Canal"
          component={TelaCanal}
          options={{title:'Tela Canal'}}
        />
        <Gavetas.Screen
          name="Cursos"
          component={TelaCursos}
          options={{title:'Tela Cursos'}}
        />
      </Gavetas.Navigator>
    </NavigationContainer>
  );
}; 