import React, { useState } from 'react'
import { ActivityIndicator, Animated, ImageErrorEventData, ImageStyle, NativeSyntheticEvent, StyleProp, View, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAnimation } from '../hooks/useAnimation';


interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
    onPress?: () => void;
}

export const FadeInImage = ({ uri, style = {}, onPress } : Props) => {

    const { opacity, fadeIn } = useAnimation();
    const [ isLoading, setIsLoading ] = useState( true );

    const finishLoading = () => {
        setIsLoading(false);
        fadeIn();
    }

    const onError = (err: NativeSyntheticEvent<ImageErrorEventData>) => {
        setIsLoading( false );
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            ...style as any,
        }}>
            
            {
                isLoading && 
                    <ActivityIndicator 
                        style={{ position: 'absolute' }} 
                        color="#fff"
                        size={ 30 }
                    />
            }
            {
                !onPress 
                    ? 
                        (
                            <Animated.Image 
                                source={{ uri }}
                                onError={ onError } 
                                onLoad={ finishLoading }
                                style={{
                                    ...style as any,
                                    opacity
                                }}
                            />
                        )
                    : 
                        (
                            <TouchableOpacity
                                onPress={ onPress }
                                activeOpacity={0.9}
                            >
                                <Image 
                                    source={require('../assets/pokebola-blanca.png')}
                                    style={ styles.pokebola }
                                />
                                <Animated.Image 
                                    source={{ uri }}
                                    onError={ onError } 
                                    onLoad={ finishLoading }
                                    style={{
                                        ...style as any,
                                        opacity
                                    }}
                                />
                            </TouchableOpacity>
                        )

            }

            

        </View>
    )
}


const styles = StyleSheet.create({
    pokebola: {
        position: 'absolute',
        width: 180,
        height:180,
        opacity:0.5
    }
});