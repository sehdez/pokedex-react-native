import React from 'react'
import { TouchableOpacity, View, StyleSheet, Dimensions, Text, Image } from 'react-native';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useEffect, useState, useRef } from 'react';
import { getImageColors } from '../helpers/getImageColors';
import { useNavigation } from '@react-navigation/native';
import { capitalName } from '../helpers/capitalName';

interface Props {
    pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width

const PokemonCard = ( { pokemon }: Props ) => {
    
    const [color, setColor] = useState('rgba(200,200,200,0.2)')
    const isMounted = useRef(true)
    const { navigate } = useNavigation();

    useEffect(()=> {
        getImageColors(pokemon.picture)
            .then((colors) => {
                if (!isMounted) { return }
                  setColor(colors[0]||'rgba(200,200,200,0.2)')
            })
        return ( () => {
            isMounted.current = false
        })
    },[])
  return (
    <TouchableOpacity
        activeOpacity={0.5}
        onPress={ () => navigate('PokemonScreen' as never, {pokemon, color} as never)  }
    >
        <View style={{
             ...styles.cardContainer,
             width: windowWidth *0.42,
             backgroundColor: color+'80'
              
            }}>
            <View>
                <Text style={ styles.text }>
                    { capitalName(pokemon.name) }
                    { '\n#' + pokemon.id }

                </Text>
            </View>
            <Image 
                source={ require('../assets/pokebola.png') }
                style={ styles.pokebola }
            />
        </View>
            <FadeInImage 
                uri={ pokemon.picture }
                style= { styles.img }
            />
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
    cardContainer:{
        marginHorizontal:10,
        backgroundColor:'rgba(200,200,200,0.2)',
        // opacity:0.7,
        height:120,
        width: 160,
        marginVertical: 15,
        borderRadius: 10,
        overflow: 'hidden',
    },
    img: { 
        height: 100,
        width:100,
        position: 'absolute',
        right:-3,
        bottom: 3
    },
    text:{ 
        color: 'white',
        fontSize:20,
        fontWeight:'bold',
        top:20,
        left:10,
    },
    pokebola: {
        position:'absolute',
        width:100,
        height:100,
        bottom:-12,
        right: -13,
        opacity: 0.3

    }
});

export default PokemonCard