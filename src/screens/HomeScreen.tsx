import React from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native';

import HeaderTitle             from '../components/HeaderTitle';
import PokemonCard             from '../components/PokemonCard';
import PokebolaBackground      from '../components/PokebolaBackground';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';


const HomeScreen = () => {
    const { simplePokemon, loadPokemons } = usePokemonPaginated();

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <PokebolaBackground/>

            <HeaderTitle title='Pokedex' noMB />
            
            <FlatList 
                data={simplePokemon}
                showsVerticalScrollIndicator = { false }
                numColumns={ 2 }
                ListFooterComponent = { ()=> <ActivityIndicator size={50} color='white' /> }
                keyExtractor = { ( item ) => item.id }
                renderItem={ ({item}) => <PokemonCard pokemon={item} /> }
                onEndReached = { loadPokemons }
                onEndReachedThreshold = { 0.4 }
            />

        </View>   
    )
}

export default HomeScreen