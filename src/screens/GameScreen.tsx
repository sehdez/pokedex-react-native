import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { usePokemonOptions } from '../hooks/usePokemonOptions';

import HeaderTitle from '../components/HeaderTitle'
import { Loading } from '../components/Loading';
import GamePicture from '../components/GamePicture';
import PokebolaBackground from '../components/PokebolaBackground';
import GameOptions from '../components/GameOptions';
import { capitalName } from '../helpers/capitalName';
import { styles } from '../theme/appTheme';
import GameFooter from '../components/GameFooter';
import { usePokemonGame } from '../hooks/usePokemonGame';


const GameScreen = () => {

    const {
        game,
        pokemonArr,
        pokemonSelected,
        next,
        loading,
        optionSelected } = usePokemonGame();

    const {finishStage, level, lives, loadNext, stages, win} = game

    
    if (loadNext){
        return (
            <>
                <Loading />
                <GameFooter level={ level } stages = { stages } lives = { lives } />
            </>
        ) 
    }

    if (loading){
        return <Loading />
    }

    return (
        <View style={{
            flex:1
        }}>
            <PokebolaBackground/>

            <HeaderTitle title='¿Quién es este pokemon?' />
            <GamePicture id={ pokemonSelected.id } hidden = { !finishStage } />

            {
                (finishStage && win === false) &&
                    <View>
                        <HeaderTitle title={`Perdiste, el pokemon es: ${ capitalName(pokemonSelected.name) }`} />
                    </View>
            }

            {
                (finishStage && win === true) &&
                    <View>
                        <HeaderTitle title={`¡Ganaste! \n¡Eres el mejor!`} />
                    </View>
            }
            {
                finishStage &&
                (
                    <View style={ styles.buttonsContainer }>
                        <TouchableOpacity 
                            activeOpacity={0.7}
                            onPress = { next }
                            style={ styles.button } >
                            <Text style={ styles.text }>Siguiente</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
            {
                !finishStage &&
                  (
                    <GameOptions 
                        pokemones={ pokemonArr } 
                        onPress = { ( id: number ) => optionSelected( id ) }    
                    />
                  )  
            }
            <GameFooter level={ level } stages = { stages } lives = { lives } />
            
        </View>
    )
}

export default GameScreen