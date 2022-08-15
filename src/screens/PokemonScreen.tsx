import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Image, Text, ScrollView, ActivityIndicator } from 'react-native';

import { RootStackParams } from '../navigator/StackNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HeaderPokemonView from '../components/HeaderPokemonView';
import { usePokemonComplete } from '../hooks/usePokemonComplete';
import PokemonDetails from '../components/PokemonDetails';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'>{}

const PokemonScreen = ( { navigation, route }:Props ) => {
    
    const { top } = useSafeAreaInsets()
    const { pokemon, color } = route.params;
    const { 
        isLoading, 
        evolutions, 
        species, 
        isLoadingEvo,
        pokemon: pokemonFull } = usePokemonComplete( pokemon.id );

    return (
        <View style={{ flex: 1 }}>
            
            <HeaderPokemonView color={color} pokemon={ pokemon } top = { top } />
            {
                isLoading
                ?( <ActivityIndicator color={'white'} size={50} /> )
                :(
                    <PokemonDetails 
                        isLoading = { isLoadingEvo }
                        pokemon = { pokemonFull } 
                        species = {species}    
                        evolutions = { evolutions }
                    />
                )
            }
            

            <Image 
                source={ require('../assets/pokemon.png') }
                style={ styles.pokemonBackground }
            />

        </View>
    )
}

const styles = StyleSheet.create({
    
    pokemonBackground: {
        width:'100%',
        height:150,
        position:'absolute',
        bottom: -20,
        opacity: 0.1,
        zIndex: -1
    }
});
export default PokemonScreen