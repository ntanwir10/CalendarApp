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
        this.setDate = this.setDate.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.saveData = this.saveData.bind(this);
        //console.log("remminder screen", this.props);
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
                            placeHolderTextStyle={{ color: "#09905e" }}
                            onDateChange={this.setDate}
                        />
                        <Text style={styles.datePicker}>
                            {chosenDate}
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Button block success style={styles.saveBtn} onPress={ this.saveData() } >
                            <Icon type='MaterialIcons' name='done' />                        
                        </Button>
                    </View>
                </Form>
            </View> 
        );
    }

    setDate(newDate) {
        console.log(newDate);
        this.setState({
            chosenDate: newDate
        });
    }

    handleChangeInput = (input) => {
        this.setState({
            text: input
        });
    }

    //save the input
    // saveData() {
    //     let {chosenDate, ...restOfState} =  this.state;
    //     let textArray = Object.entries(restOfState).map(([key, value])=> ({[key]: value}));
    //     let fomattedState = {[chosenDate]:textArray};
    //     console.log('formatted state', fomattedState);
    //     AsyncStorage.setItem("key", JSON.stringify(this.fomattedState));
    // }

    async saveData() {
        let {chosenDate, ...restOfState} =  this.state;
        let textArray = Object.entries(restOfState).map(([key, value])=> ({[key]: value}));
        console.log(textArray);
        if (textInput[0].text === "") {
            alert("Set your Reminder");
        }
        else {
            let formattedState = {};
            let keyData = await AsyncStorage.getItem('key');
            console.log({keyData});
            if(keyData){
                formattedState = JSON.parse(keyData);
            }
            if(formattedState[chosenDate]) {
                formattedState[chosenDate] = formattedState[chosenDate].concat(textArray);
            }
            else {
                formattedState[chosenDate] = textArray;
            }
            AsyncStorage.setItem("key", JSON.stringify(this.fomattedState));
            Alert.alert('Yay!!', 'Succefully saved.');   
            this.props.navigation.navigate('Agenda');         
        }
        
    }
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 10,
        padding: 10,
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