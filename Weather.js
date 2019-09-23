import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import console = require('console');

export default class Weather extends React.Component {
  dolt = () => {
    console.log("Hello from console")
  }
  render(){
    return (
      <View style={styles.container}>
        <Text onPress={this.doIt}>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});