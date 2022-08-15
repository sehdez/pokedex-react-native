import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { View, Image, FlatList, ActivityIndicator } from 'react-native';
import { styles } from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';


const HomeScreen = () => {
    const { simplePokemon, isLoading, loadPokemons } = usePokemonPaginated();

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Image 
                source={ require('../assets/pokebola-blanca.png') }
                style={ styles.pokebola }
            />
            <HeaderTitle title='Pokedex' noMB />
            <FlatList 
                data={simplePokemon}
                showsVerticalScrollIndicator = { false }
                numColumns={ 2 }
                // ListHeaderComponent = { ()=> <HeaderTitle title='Pokedex' /> }
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