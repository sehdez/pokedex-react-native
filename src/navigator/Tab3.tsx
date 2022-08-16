import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import GameScreen from '../screens/GameScreen';
import NewGameScreen from '../screens/NewGameScreen';


const Stack = createStackNavigator();


const Tab3 = ()=> {
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
            <Stack.Screen name="NewGameScreen" component={NewGameScreen} />
            <Stack.Screen name="GameScreen" component={GameScreen} />
        </Stack.Navigator>
    );
}

export default Tab3;