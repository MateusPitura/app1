import React, {useState} from 'react'
import {View, Text, Button, Modal} from 'react-native'
import Estilos from '../estilos/style'

export default function(){

    const [visivel, setVisivel]=useState(true)

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visivel}
            >
                <View style={Estilos.mod}>
                    <Text style={Estilos.textoMod}>Brasil</Text>
                    <Text style={Estilos.textoMod}>Alemanha</Text>
                    <Button
                        title="Fechar"
                        onPress={()=>setVisivel(!visivel)}
                    />
                </View>
            </Modal>
            <Button
                title="Fechar"
                onPress={()=>setVisivel(!visivel)}
            />
        </View>
    );
}