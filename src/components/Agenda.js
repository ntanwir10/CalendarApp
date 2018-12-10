import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { Fab, Icon } from 'native-base';
import { Agenda } from 'react-native-calendars';
import PropTypes from 'prop-types';
class WeeklyAgenda extends Component {
    constructor(props) {
      super(props);
      this.state = {
        items: {},
        selectedDate: ''
      };
    }

    render() {
      const {items} = this.state;
      return (
        <View style={{height:600}}>
          <Agenda
            items={items}
            loadItemsForMonth={this.loadItems.bind(this)}
            selected={this.props.day}
            renderItem={this.renderItem.bind(this)}
            renderEmptyData={this.renderEmptyDate.bind(this)}
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

  //On application loads, this will get the already saved data and set the state true when it's true.
    componentDidMount() {
        AsyncStorage.getItem("key").then((newItems) => {
        console.log('checking new items', newItems);
            this.setState({ items: JSON.parse(newItems) });
        });
    }
    loadItems()  {
      //console.log('day', day);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {
        newItems[key] = this.state.items[key];
      });
      this.setState({
        items: newItems
      });
    } 

     renderItem(item) {
      return (
        <View style={[styles.item, {height: item.height}]}>
          <TouchableOpacity onPress={(date) => {this.props.navigation.navigate('Reminder',date)}}>
            <Text>{item.text}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    renderEmptyDate(item) {
      return (
        <View style={styles.emptyDate}>
          <TouchableOpacity onPress={() => {this.props.navigation.navigate('Reminder')}}>
            <Text style={styles.emptyTextColor}> No Event or Reminder on this date </Text>
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
    },
    emptyTextColor: {
      padding: 20,
      fontSize: 18,
      color: '#09905e'
    }
});
 
export default WeeklyAgenda;