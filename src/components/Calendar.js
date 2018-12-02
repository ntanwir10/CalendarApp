import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

import { CalendarList } from 'react-native-calendars';

class Calendar extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() { 
        return ( 
            <View>
                <CalendarList 
                    theme={{ todayTextColor: '#28F1A6' }}
                    pastScrollRange={10}
                    futureScrollRange={12}
                    scrollEnabled={true}
                    showScrollIndicator={true}
                />
                <TouchableHighlight underlayColor={'#EEE'} style={styles.calendarArrowWrapper} onPress={() =>       this.props.navigation.navigate('Agenda')}>
                    <Icon style={styles.calendarForwardArrow} type='MaterialIcons' name='view-week' />
                </TouchableHighlight>
            </View>
         );
    }
}

const styles = StyleSheet.create({
    calendarForwardArrow: {
            color: 'white',
            fontSize: 40,
        },
    calendarArrowWrapper: {
        position: 'absolute',
        top: -50,
        right: 10,
        zIndex: 2
    }
});
 
export default Calendar;