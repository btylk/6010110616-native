import React from 'react';
import { StyleSheet, Text, View , ImageBackground } from 'react-native';
export default class Forecast extends React.Component {
    render() {
    return (
        <View>
            <Text style={styles.text}>{this.props.main}</Text>
            <Text style={styles.text}>{this.props.description}</Text>
            <Text style={styles.text}>{this.props.temp}</Text>
            <Text style={styles.text}>°C</Text>
        </View>
        );
    }
   }
   
const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        color: '#ffffff'
    }
});