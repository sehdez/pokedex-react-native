import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../theme/appTheme';

interface Props {
    lives: number;
    stages: number[];
    level: number;

}


const GameFooter = ( { stages, lives, level}: Props ) => {
    return (
        <View style={ localStyles.conteinerFooter }>
            <View style={ localStyles.lives }>                        
                <Text><Icon name='heart-outline' size={60} color='red' /></Text>
                <Text style={ styles.text }>{ lives }</Text>
            </View>

            <View style={ localStyles.stagesContainer }>
                <Text style={ styles.text }>Nivel { level }/10</Text>
                <View style={ localStyles.stages }>
                    {
                        stages.map( ( lev, index ) => (
                            // lev &&
                                lev === 0 
                                    ? <Text key={ index.toString()+lev.toString() } ><Icon name='close-outline' size={60} color='red' /></Text>
                                    : <Text key={ index.toString()+lev.toString() } ><Icon name='checkmark-outline' size={60} color='green' /></Text>
                        ))
                    }
                </View>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    conteinerFooter:{
        flexDirection: 'row',
        marginHorizontal:20,
        position:'absolute',
        bottom: 60
    },
    lives:{
        alignItems:'center'
    },
    stagesContainer: {
        width:250,
        // alignItems:'center',
        marginLeft: 40
    },
    stages: {
        flexDirection:'row',
        flexWrap: 'wrap'
        
    }

});

export default GameFooter