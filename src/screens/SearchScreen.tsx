import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Dimensions, 
    FlatList } from 'react-native';


import HeaderTitle from '../components/HeaderTitle'
import { styles } from '../theme/appTheme';
import { InputText } from '../components/InputText';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import PokemonCard from '../components/PokemonCard';
import { Loading } from '../components/Loading';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import PokebolaBackground from '../components/PokebolaBackground';

const { width } = Dimensions.get('window');

const SearchScreen = () => {

    const { isLoading, simplePokemon } = usePokemonSearch();
    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('');

    useEffect( () => {

        if( term.trim().length === 0 ){
            return setPokemonFiltered([])
        }
        setPokemonFiltered(
            simplePokemon.filter( (poke) => poke.name.toLowerCase().includes(term.toLowerCase())|| poke.id === term))
    }, [term])


    if(isLoading){
        return( <Loading /> )
      }
    
    return (
        <TouchableWithoutFeedback
            onPress={ Keyboard.dismiss }
        >
            <View style={ stylesLocal.container }>

                <PokebolaBackground/>

                <HeaderTitle title='' noMB  />
                
                <View style={{ width: width-15}}>
                    <InputText 
                        onDebounce = { setTerm }
                    />
                        
                </View>

                <FlatList 
                    StickyHeaderComponent={() => <HeaderTitle title={'term'} noMT noMB />}
                    data={pokemonFiltered}
                    showsVerticalScrollIndicator = { false }
                    numColumns={ 2 }
                    stickyHeaderHiddenOnScroll = { true}
                    ListHeaderComponent = { ()=> <HeaderTitle title={term} noMT noMB />}
                    keyExtractor = { ( item, index ) => item.id + index }
                    renderItem={ ({item}) => <PokemonCard pokemon={item} /> }
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const stylesLocal = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    },
    
});

export default SearchScreen