import React from 'react'
import { View, StyleSheet } from 'react-native';
import { FadeInImage } from './FadeInImage';
import { useRef } from 'react';

interface Props {
    id: number,
    hidden?: boolean;
}

const GamePicture = ( { id, hidden = false }: Props ) => {
    const urlImage = useRef(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`)

    return (
        <View style={{
            alignItems:'center'
        }} >
            {
                hidden && 
                    (
                        <FadeInImage 
                            hidden 
                            uri={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } 
                            style={ styles.img }
                        />
                    )
            }
            {
                !hidden && 
                    (
                        <FadeInImage 
                            uri={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png` } 
                            style={ styles.img }
                        />
                    )
            }
        </View>
    )
}
const styles = StyleSheet.create({
    img:{
        height: 190,
        width : 190
    }
});

export default GamePicture