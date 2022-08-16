import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import PokemonScreen from '../screens/PokemonScreen';
import { RootStackParams } from './Tab1';
import SearchScreen from '../screens/SearchScreen';


const Stack = createStackNavigator<RootStackParams>();


const Tab2 = ()=> {
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
            <Stack.Screen name="HomeScreen" component={SearchScreen} />
            <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
        </Stack.Navigator>
    );
}

export default Tab2;