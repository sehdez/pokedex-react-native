import React from 'react'
import { View, TouchableOpacity, Image, Animated, StyleSheet } from 'react-native';
import HeaderTitle from './HeaderTitle';
import { FadeInImage } from './FadeInImage';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimationXY } from '../hooks/useAnimationXY';
import { capitalName } from '../helpers/capitalName';
import { useNavigation } from '@react-navigation/native';

interface Props {
    pokemon: SimplePokemon;
    color: string,
    top: number;
}

const HeaderPokemonView = ( { pokemon, color, top }:Props ) => {

    const { pan, panResponder } = useAnimationXY();
    const navigation = useNavigation();

    return (
        <View style={ styles.bg}>
            <View style={{
                ...styles.container,
                backgroundColor: color+'70'
            }}>
                {/* Icono para regresar */}
                <View style={{
                    ...styles.title,
                    top: top+5,
                }}>
                    <TouchableOpacity onPress={ () => navigation.goBack()}>
                        <Icon name='arrow-back-outline' size={35} color='#fff'/>
                    </TouchableOpacity>

                    <HeaderTitle title={ capitalName(pokemon.name) } noMT />
                    <HeaderTitle title={ '#' + pokemon.id } noMT />
                </View>
                {/* Pokebola de fondo */}
                <Image 
                    source={ require('../assets/pokebola.png') }
                    style={ styles.pokebola }
                />
                <View style={ styles.containerPokemon }>
                    <Animated.View
                        {...panResponder.panHandlers}
                        style={  [pan.getLayout(), styles.pokemonAnimation ] }
                    >
                        <FadeInImage 
                            uri={ pokemon.picture }
                            style={ styles.pokemonImg }    
                        />
                    </Animated.View>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    bg: {
        backgroundColor:'#000',
        zIndex:999,
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    container:{
        height:240,
        zIndex:99999,
        alignItems:'center',
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
    },
    pokebola: {
        width:180,
        height:180,
        position:'absolute',
        bottom: -15
    },
    title: {
        width:'90%',
        flexDirection: 'row',
        justifyContent:'space-between',
        position: 'absolute',
        left: 5,
    },
    pokemonAnimation: {
        width: 180,
        height:180
    },
    containerPokemon:{
        position:'absolute',
        bottom: -15,
        width: 180,
        height:180
    },
    pokemonImg: {
        position:'absolute',
        bottom: 0,
        width: 180,
        height:180
    }
});
export default HeaderPokemonView