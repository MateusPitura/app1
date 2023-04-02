import React, {useState} from 'react';
import {Text, View, Switch, SafeAreaView} from 'react-native';

export default function CarroF(props: any){
    const[ligado, setLigado] = useState(false)
    //const toggleLigado=()=>{setLigado(!ligado)}
    const toggleLigado=()=>setLigado((previousState)=>{return !previousState})
    return(
        <SafeAreaView>
            <Text>Carro: {props.nome} - Ligado: {ligado?"Sim":"Não"}</Text>
            <Switch
                trackColor={{false:'#777', true:'#8bf'}}
                thumbColor={ligado?'#00f':'#444'}
                value={ligado}
                onValueChange={toggleLigado}
            />
        </SafeAreaView>
    );
}