import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import {
    Form,
    Item,
    Input,
    Button, Icon,
    DatePicker, Text
} from 'native-base';
import PropTypes from 'prop-types';

class Reminder extends Component {
    constructor(props) {
        super(props);
         this.state = {
             chosenDate: new Date()
         };
         this.setDate = this.setDate.bind(this);
    }

    setDate(newDate) {
        this.setState({
            chosenDate: newDate
        });
    }
    
    render() { 
        return ( 
            <View>
                <Form style={styles.formContainer}>
                    <View style={styles.formView}>
                        <Button transparent style={styles.editBtn}>
                            <Icon style={styles.editIcon} type='MaterialIcons' name='edit' />
                        </Button>
                       
                        <Item>
                            <Input placeholder="Set your reminder" />
                        </Item>
                        
                        <DatePicker
                            defaultDate={new Date()}
                            minimumDate={new Date(2018, 1, 1)}
                            maximumDate={new Date(2019, 12, 31)}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={this.setDate}
                            
                        />
                        <Text style={styles.datePicker}>
                            {this.state.chosenDate.toString().substr(4, 12)}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Button block success style={styles.saveBtn} 
                            onPress={() => {show('Successfully saved!', 2000);}}>
                            <Icon type='MaterialIcons' name='done' />                        
                        </Button>
                        <Button block  danger style={styles.cancelBtn} 
                           onPress={() => {this.props.navigation.navigate('Agenda')}} >
                            <Icon type='MaterialIcons' name='cancel' />                         
                        </Button>
                    </View>
                </Form>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 10,
        padding: 10,
    },
    editIcon:{
        color: '#28F1A6',
        fontSize: 26,
    },
    editBtn:{
        flex: 1,
        alignSelf: 'flex-end',
    }, 
    datePicker:{
        alignSelf: 'auto',
        paddingLeft: 10
    },
    footer:{
        position: 'relative',
        top: 350
    },
    saveBtn: {
        position:'relative',
        marginBottom: 10,
    }
    
});
 
export default Reminder;