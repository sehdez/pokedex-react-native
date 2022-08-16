import React, { useState, useEffect }  from 'react'
import { View, TextInput, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props {
    onDebounce : ( termino: string ) => void
}

export const InputText = ( { onDebounce }:Props ) => {
    const [termino, setTermino] = useState('')
    const value = useDebounceValue(termino);

    useEffect(() => {
        onDebounce(value)
    }, [value])
    
    
    return (
        <View style={ styles.container}>
            <TextInput
                style={ styles.input}
                placeholder='Ingresa el nombre o id del pokemon'
                placeholderTextColor={'rgba(255,255,255,0.3)'}
                onChangeText={ setTermino }
                value = {termino}
                autoCapitalize='words'
                keyboardType='ascii-capable'
            />
            <View style={ styles.icon }>
                <Icon name='search-outline' color='gray' size={30} />
            </View>
        </View>
     )
}

const styles = StyleSheet.create({
    container: {
        borderWidth:1,
        borderColor:'rgba(255,255,255,0.6)',
        borderRadius: 15,
        paddingHorizontal:10,
        flexDirection: 'row',
        alignItems:'center'
    },
    input:{
        color:'#fff',
        fontSize:20,
        height: 50,
        marginRight: 30,
   },
   icon:{
        position:'absolute',
        right: 5
   }
}); 