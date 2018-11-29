import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from '../screens/SplashScreen';

const NavStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen
        },
    },
    {
        initialRouteName: 'Splash',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#28F1A6',
                elevation: 0,
                shadowOpacity: 0
            },
            headerTintColor: '#333333',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    }

);

const Routes = createAppContainer(NavStack);
export default Routes;