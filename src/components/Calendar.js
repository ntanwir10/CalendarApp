import React, { Component } from 'react';
import { View } from 'react-native';

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
            </View>
         );
    }
}
 
export default Calendar;