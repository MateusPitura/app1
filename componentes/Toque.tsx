import React, {useState} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Estilo from '../estilos/style'

export default function(){

    const [cont, setCont]=useState(0);

     const contar=()=>{setCont(cont+1)}

    return(
        <View>
            <TouchableOpacity 
                style={Estilo.botao}
                onPress={contar}
            >
                <Text>Hello world</Text>
            </TouchableOpacity>
            <Text>{cont}</Text>
        </View>
    );
}