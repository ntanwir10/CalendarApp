import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';

class ReminderScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {navigation} = this.props;
        return (
            <View>
                <Button>
                </Button>
            </View>
        );
    }
}

export default ReminderScreen;