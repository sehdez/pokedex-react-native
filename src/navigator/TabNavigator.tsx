import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: '#000'
            }}
            screenOptions={{
                headerShown:false,
                tabBarActiveTintColor: 'red',
                tabBarLabelStyle:{
                    fontSize: 1,
                    color:'black'
                },
                tabBarStyle:{
                    backgroundColor:'rgba(0,0,0,0.6)',
                    borderTopColor:'#00000000',
                    position:'absolute',
                    elevation:0,
                    height: 50,
                }
                
            }}
            
        >
            <Tab.Screen 
                options={{
                    tabBarLabel: '' ,
                    tabBarIcon: ({ color }) => (
                        <Icon name='list-outline' color={ color } size = { 25 } />
                    )
                    }} 
                name="Tab1" 
                component={Tab1} 
            />
            <Tab.Screen 
                options={{
                    tabBarLabel: '' ,
                    tabBarIcon: ({ color }) => (
                        <Icon name='search-outline' color={ color } size = { 25 } />
                    )
                    }} 
                name="Tab2" 
                component={Tab2} 
            />

            <Tab.Screen 
                options={{
                    tabBarLabel: '' ,
                    tabBarIcon: ({ color }) => (
                        <Icon name='game-controller-outline' color={ color } size = { 25 } />
                    )
                    }} 
                name="Tab3" 
                component={Tab3} 
            />
        </Tab.Navigator>
    );
}

export default TabNavigator