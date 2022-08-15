import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, useWindowDimensions, Image } from 'react-native';

import { FadeInImage } from './FadeInImage';
import { Evolutions } from '../interfaces/evolutionsInterface';

import { useSimplePokemon } from '../hooks/useSimplePokemon';
import { getImage } from '../helpers/getIdPokemon';
import { capitalName } from '../helpers/capitalName';

interface Props {
    evolutions: Evolutions;
}

const PokemonEvolutions = ({evolutions}: Props) => {
    const { width } = useWindowDimensions()

    const { navigate } = useNavigation();
    const { colors, pokemones, isLoading } = useSimplePokemon( evolutions )
   

    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{
                height:200,
            }}
        >
            {
                isLoading 
                    ? ( 
                        <View style = {{ justifyContent:'center', width }} >
                            <ActivityIndicator color={'white'} size={50} /> 
                        </View> 
                     ) 
                    : (<>
                            {
                                evolutions?.chain?.species && 
                                    ( 
                                        <View style={ styles.image }>
                                            <FadeInImage 
                                                uri={ getImage(evolutions?.chain?.species.url) } 
                                                style={ styles.spriteBasic } 
                                                onPress = {() => navigate('PokemonScreen' as never, {pokemon: pokemones.current.pokemon1, color: colors.current.color1 } as never )}
                                            />
                                            <Text style={ styles.titulo }> { capitalName(evolutions.chain.species.name) } </Text>
                                        </View>
                                    )
                            }
                            {
                                evolutions?.chain?.evolves_to[0]?.species.name &&
                                        (
                                            <View style={ styles.image }>
                                                <FadeInImage 
                                                    uri={ getImage(evolutions?.chain?.evolves_to[0]?.species.url) } 
                                                    style={ styles.spriteBasic } 
                                                    onPress = {() => navigate('PokemonScreen' as never, {pokemon: pokemones.current.pokemon2, color: colors.current.color2 } as never )}
                                                />
                                                <Text style={ styles.titulo }> { capitalName(evolutions?.chain?.evolves_to[0]?.species.name) } </Text>
                                            </View>
                                        )
                            }
                            {
                                evolutions?.chain?.evolves_to[0]?.evolves_to[0]?.species.name &&
                                        (
                                            <View style={ styles.image }>
                                                <FadeInImage 
                                                    uri={ getImage(evolutions?.chain?.evolves_to[0]?.evolves_to[0]?.species.url) } 
                                                    style={ styles.spriteBasic } 
                                                    onPress = {() => navigate('PokemonScreen' as never, {pokemon: pokemones.current.pokemon3, color: colors.current.color3 } as never )}
                                                />
                                                <Text style={ styles.titulo }> { capitalName(evolutions?.chain?.evolves_to[0]?.evolves_to[0]?.species.name) } </Text>
                                            </View>
                                        )
                            }
                            {
                                evolutions?.chain?.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.name &&
                                        (
                                            <View style={ styles.image }>
                                                <FadeInImage 
                                                    uri={ getImage(evolutions?.chain?.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.url) } 
                                                    style={ styles.spriteBasic } 
                                                />
                                                <Text style={ styles.titulo }> { capitalName(evolutions?.chain?.evolves_to[0]?.evolves_to[0]?.evolves_to[0]?.species.name) } </Text>
                                            </View>
                                        )
                            }
                        </>
                      )   
            }
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    image: {
        flexDirection:'column',
        justifyContent: 'center',
        alignItems:'center',
        marginHorizontal:100,

    },
    spriteBasic: {
        width: 180,
        height:180,
    },
    titulo:{
        color: 'white',
        fontSize:25,
        fontWeight: 'bold',
    }
    
});

export default PokemonEvolutions