import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';

const App = () => {
    return (
        <NavigationContainer> 
            <StatusBar 
                translucent={true}
                backgroundColor={'transparent'}
                networkActivityIndicatorVisible= {false}
                barStyle='light-content'
            />
            <StackNavigator />
        </NavigationContainer>
    )
}

export default App