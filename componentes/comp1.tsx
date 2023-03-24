import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Estilos from '../estilos/style';

export default function(props){
    return(
        <Text style={Estilos.textoCursos}>Curso de {props.curso}. Nota: {props.nota}</Text>
    );
}