import React from 'react';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
export default class Forecast extends React.Component {
    render() {
    return (
        <View style = {styles.container}>
            <Text style={styles.text}>{this.props.main}</Text>
            <Text style={styles.text}>{this.props.description}</Text>
            <Text style={styles.text}>{this.props.temp}°C</Text>
        </View>
        );
    }
   }
   
const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        color: 'white',
    },
    container : {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity : 0.5,
    
    }
});