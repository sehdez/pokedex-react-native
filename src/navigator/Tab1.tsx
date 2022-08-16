import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import HomeScreen        from '../screens/HomeScreen';
import PokemonScreen     from '../screens/PokemonScreen';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

export type RootStackParams = {
    HomeScreen : undefined;
    PokemonScreen : {pokemon: SimplePokemon, color: string};
} 

const Stack = createStackNavigator<RootStackParams>();


const Tab1 = ()=> {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                animationEnabled:false,
                cardStyle:{
                    backgroundColor:'#000'
                }
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}

export default Tab1;