import React from 'react';
import {View, Text} from 'react-native';

function fexibir(vp1){
    if(vp1==true){
        return(<Text>Curso de React Native</Text>);
    } else{
        return <Text>- - -</Text>;
    }
}

export default function(props){
    return(
        <View style={{width:'100%', height:300, flexDirection:'column', justifyContent:'center', alignItems:'stretch'}}>
            {
                props.exibir?
                <View style={{flex:1}}>
                    <View style={{flexGrow:6, backgroundColor:'#00f'}}></View>
                    <View style={{flexGrow:5, backgroundColor:'#00a'}}></View>
                    <View style={{flexGrow:4, backgroundColor:'#005'}}></View>
                </View>
                :
                <View style={{flex:1}}>
                    <View style={{flexGrow:3, backgroundColor:'#f00'}}></View>
                    <View style={{flexGrow:2, backgroundColor:'#a00'}}></View>
                    <View style={{flexGrow:1, backgroundColor:'#500'}}></View>
                </View>
            }
        </View>
    )};
    