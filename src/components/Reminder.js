import React, { Component } from 'react';
import { View,StyleSheet, AsyncStorage, TextInput, Alert } from 'react-native';
import {
    Form,
    Button, Icon,
    DatePicker, Text
} from 'native-base';
import PropTypes from 'prop-types';
class Reminder extends Component {
   
    constructor(props) {
        super(props);
        let formatDate = new Date();
        this.state = {
            chosenDate: formatDate.toISOString().split('T')[0],
            text: '',
        };
        
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.saveData = this.saveData.bind(this);
    }

   

    render() { 
        const {chosenDate} = this.state;
        return ( 
            <View>
                <Form style={styles.formContainer}>
                    <View style={styles.formView}>

                        < TextInput
                            placeholder = "Set your reminder"
                            onChangeText={this.handleChangeInput}
                            value={this.state.text}
                        />

                        <DatePicker
                            defaultDate = {new Date()}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText="Select date"
                            textStyle={{ color: "green" }}
                            placeHolderTextStyle={{ color: "#d3d3d3" }}
                            onDateChange={()=>this.setState(new Date())}
                        />
                        <Text style={styles.datePicker}>
                            {chosenDate}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Button block success style={styles.saveBtn} 
                            onPress={ () => 
                                    {
                                    this.saveData()
                                    //console.log('save data', fomattedState);
                                    Alert.alert('Yay!!', 'Succefully saved.')
                                    }
                                } 
                           >
                            <Icon type='MaterialIcons' name='done' />                        
                        </Button>
                    </View>
                </Form>
            </View> 
        );
    }

    handleChangeInput = (input) => {
        this.setState({
            text: input
        });
    }

    //save the input
    saveData() {
        let {chosenDate, ...restOfState} =  this.state;
        let textArray = Object.entries(restOfState).map(([key, value])=> ({[key]: value}));
        let fomattedState = {[chosenDate]:textArray};
        console.log('formatted state', fomattedState);
        AsyncStorage.setItem("key", JSON.stringify(this.fomattedState));
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
        marginTop: 35,
    }
});

export default Reminder;