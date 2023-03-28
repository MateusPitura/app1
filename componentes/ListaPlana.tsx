import React from 'react'
import {View,Text,FlatList, StyleSheet} from 'react-native'

const produtos=[
    {
        batata:"001",
        desc:['Mouse','25']
    },
    {
        batata:'002',
        desc:["Teclado","50"]
    },
    {
        batata:'003',
        desc:['Monitor','430']
    },
    {
        batata:'004',
        desc:['Gabinete','200']
    },
    {
        batata:'005',
        desc:['SSD','250']
    },
    {
        batata:'006',
        desc:['SSD','250']
    },
    {
        batata:'007',
        desc:['SSD','250']
    },
    {
        batata:'008',
        desc:['SSD','250']
    },
]

export default function(){
    return(
        <View>
            <FlatList 
                data={produtos}
                keyExtractor={pao=>pao.batata}
                renderItem={({item})=>
                    <Text style={estilos.item}>
                        Descrição: {item.desc[0]} - Valor: {item.desc[1]}
                    </Text>
                }
            />
        </View>
    )
}

const estilos=StyleSheet.create({
    item:{
        backgroundColor:'#008',
        color:'#fff',
        padding:15,
        marginVertical:8,
        marginHorizontal:16,
    }
});