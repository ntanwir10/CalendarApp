import React, { Component } from 'react';
import { View, Text } from 'react-native';

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
                // Callback which gets executed when visible months change in scroll view. Default = undefined
                onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                // Max amount of months allowed to scroll to the past. Default = 50
                pastScrollRange={10}
                // Max amount of months allowed to scroll to the future. Default = 50
                futureScrollRange={12}
                // Enable or disable scrolling of calendar list
                scrollEnabled={true}
                // Enable or disable vertical scroll indicator. Default = false
                showScrollIndicator={true}
                />
            </View>
         );
    }
}
 
export default Calendar;