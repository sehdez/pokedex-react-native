import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import PokebolaBackground from '../components/PokebolaBackground';
import { styles }         from '../theme/appTheme';

const NewGameScreen = () => {
    const { navigate } = useNavigation();
    return (
        <View style={{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <PokebolaBackground/>
            <TouchableOpacity 
                activeOpacity={0.7}
                onPress = { () => navigate('GameScreen' as any) }
                style={ styles.button } >
                <Text style={ styles.text }>Comenzar a jugar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NewGameScreen