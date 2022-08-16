import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';


import HeaderTitle        from '../components/HeaderTitle'
import { Loading }        from '../components/Loading';
import GamePicture        from '../components/GamePicture';
import PokebolaBackground from '../components/PokebolaBackground';
import GameOptions        from '../components/GameOptions';
import GameFooter         from '../components/GameFooter';
import { capitalName }    from '../helpers/capitalName';
import { usePokemonGame } from '../hooks/usePokemonGame';
import { styles }         from '../theme/appTheme';


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