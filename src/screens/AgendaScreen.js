import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import WeeklyAgenda from '../components/Agenda';

const AgendaScreen = ({navigation}) => (
    <View style={{height: 100}}>
        <WeeklyAgenda  navigation={navigation}>
            <StatusBar backgroundColor="#28F1A6" />
        </WeeklyAgenda >
    </View>
);

WeeklyAgenda.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default AgendaScreen;