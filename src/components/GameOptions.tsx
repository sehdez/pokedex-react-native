import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';

import { PokemonArr }  from '../hooks/usePokemonOptions';
import { capitalName } from '../helpers/capitalName';
import { styles }      from '../theme/appTheme';

interface Props {
    pokemones: PokemonArr[];
    onPress  : ( id: number ) => void;
}

const GameOptions = ( { pokemones, onPress }: Props ) => {
    return (
        <View style={ styles.buttonsContainer }>
            {
                pokemones.map(( { id, name } ) => (
                    <TouchableOpacity 
                        onPress={ () => onPress(id) }
                        key={id+name} 
                        style={ styles.button }
                        activeOpacity={ 0.5 }    
                    >
                        <Text style={ styles.text }>{ capitalName(name) }</Text>
                    </TouchableOpacity>
                ))
            }
        </View>
     )
}

export default GameOptions