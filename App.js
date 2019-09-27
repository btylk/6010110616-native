import React from 'react';
import Weather from './components/Weather'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WeatherScreen from './components/WeatherScreen';
import ZipCodeScreen from './components/ZipCodeScreen';

//import console = require('console');
const RootStack = createStackNavigator({
  Weather: WeatherScreen,
  ZipCode: ZipCodeScreen
}, {
    initialRouteName: 'Weather',
    initialRouteParams: {ZipCode: '90110'}
  })
const AppContainer = createAppContainer(RootStack);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

