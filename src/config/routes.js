import React, { Component } from 'react';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import SplashScreen from '../screens/SplashScreen';
import CalendarScreeen from '../screens/CalendarScreen';
import AgendaScreen from '../screens/AgendaScreen';

const NavStack = createStackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null
            },
        },
        Calendar: {
            screen: CalendarScreeen,
            navigationOptions: {
                title: 'Calendar',
            },
        },
        Agenda: {
            screen: AgendaScreen,
            navigationOptions: {
                title: 'Weekyly Schedule',
            },
        },
    },
    {
        initialRouteName: 'Splash',
        defaultNavigationOptions: {
            headerStyle: {
                    backgroundColor: '#28F1A6',
                    elevation: 0,
                    shadowOpacity: 0
                },
                headerTintColor: '#ffffff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#ffffff'
                }
        }
       
    }

);

const Routes = createAppContainer(NavStack);
export default Routes;