import React from 'react'
import { Image } from 'react-native';
import { styles } from '../theme/appTheme';

const PokebolaBackground = () => {
    return (
        <Image 
            source={ require('../assets/pokebola-blanca.png') }
            style={ styles.pokebola }
        />
    )
}

export default PokebolaBackground