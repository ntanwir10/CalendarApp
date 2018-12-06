import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Fab, Icon } from 'native-base';
import { Agenda } from 'react-native-calendars';
import PropTypes from 'prop-types';
class WeeklyAgenda extends Component {
    constructor(props) {
    super(props);
    this.state = {
      items: {}
    };
  }

  render() {
    return (
      <View style={{height:600}}>
            <Agenda
              items={this.state.items}
              loadItemsForMonth={this.loadItems.bind(this)}
              selected={this.props.day}
              renderItem={this.renderItem.bind(this)}
              renderEmptyDate={this.renderEmptyDate.bind(this)}
              rowHasChanged={this.rowHasChanged.bind(this)}
              onRefresh = {() => { this.setState({refeshing : true})}}
              refreshing = {this.state.refreshing}
              refreshControl = {null}
              pastScrollRange={1}
              futureScrollRange = {3}
              theme = {
                {
                  agendaTodayColor: '#28F1A6',
                  agendaKnobColor: '#28F1A6',
                  dotColor: '#28F1A6',
                  selectedDayBackgroundColor: '#28F1A6',
                  todayTextColor: '#28F1A6',
                }
              }
          />
          <View >
              <Fab
                  active={!this.state.active}
                  direction="up"
                  style={{ backgroundColor: '#28F1A6'}}
                  position = 'bottomRight'
                  onPress={() => this.props.navigation.navigate('Reminder')}>
                  <Icon type='MaterialCommunityIcons' name="reminder" />
              </Fab>
          </View>
      </View>
    );
  }

  loadItems(day) {
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);
        if (!this.state.items[strTime]) {
          this.state.items[strTime] = [];
          const numItems = Math.floor(Math.random() * 5);
          for (let j = 0; j < numItems; j++) {
            this.state.items[strTime].push({
              name: 'Item for ' + strTime,
              height: Math.max(50, Math.floor(Math.random() * 150))
            });
          }
        }
      }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  // loadItems = (day) => {
  //   this.setState({selectedDate: day});
  //   const newItems = {};
  //   Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
  //   this.setState({
  //     items: newItems
  //   });
  //   this.state.items;
  // };

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reminder')}}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reminder')}}>
          <Text> No Event or Reminder on this date </Text>
        </TouchableOpacity>
      </View>
      
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
    
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});
 
export default WeeklyAgenda;