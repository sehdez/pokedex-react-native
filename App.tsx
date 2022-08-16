import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigator/TabNavigator';

const App = () => {
    return (
        <NavigationContainer> 
            <StatusBar 
                translucent={true}
                backgroundColor={'transparent'}
                networkActivityIndicatorVisible= {false}
                barStyle='light-content'
            />
            <TabNavigator />
        </NavigationContainer>
    )
}

export default App