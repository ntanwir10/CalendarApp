import React, { Component } from 'react';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Fab, Icon } from 'native-base';

import { CalendarList } from 'react-native-calendars';

class Calendar extends Component {
    constructor(props) {
        super(props);
         this.state = {
             active: 'true'
         };
    }
    render() { 
        return ( 
            <View>
                <CalendarList 
                    
                    pastScrollRange={12}
                    futureScrollRange={12}
                    scrollEnabled={true}
                    showScrollIndicator={true}
                    theme = {
                        {
                            todayTextColor: '#28F1A6',
                            selectedDayBackgroundColor: '#28F1A6',
                        }
                    }
                />
                <TouchableHighlight underlayColor={'#EEE'} style={styles.calendarArrowWrapper} onPress={() =>       this.props.navigation.navigate('Agenda')}>
                    <Icon style={styles.calendarForwardArrow} type='MaterialIcons' name='view-week' />
                </TouchableHighlight>
                <View style={{flex: 1}}>
                    <Fab
                        active={!this.state.active}
                        direction="up"
                        containerStyle={{ }}
                        style={{ backgroundColor: '#28F1A6'}}
                        position = 'bottomRight'
                        onPress={() => this.setState({ active: !this.state.active })}>
                        <Icon type='MaterialCommunityIcons' name="reminder" />
                    </Fab>
                </View>
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