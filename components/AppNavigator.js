import { createStackNavigator } from 'react-navigation';
import React, { Component } from 'react';
//app screens
//import Card from './Card';
import Home from './Home';

//Every time a new screen is added, import it here 
const AppNavigator = createStackNavigator({
        // Card: { 
        //     screen: Card,
        //     navigationOptions: ({ navigation }) => ({ header: null, })
        // },
        Home: { 
            screen: Home,
            navigationOptions: ({ navigation }) => ({ header: null, })
        },
            
    },

    {
        initialRouteName:'Home',
    }
);

export default AppNavigator;