
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast'
//import console = require('console');

export default class Weather extends React.Component {
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.ZipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
            .then((response) => response.json())
            .then((json) => {
                this.setState(
                    {
                        forecast: {
                            main: json.weather[0].main,
                            description: json.weather[0].description,
                            temp: json.main.temp
                        }
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
    }

    componentDidMount = () => this.fetchData()
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
                main: '-', description: '-', temp: 0
            }
        }

    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.ZipCode !== this.props.ZipCode) {
            this.fetchData()
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../bg5.jpeg')} style={styles.backdrop}>
                    <Text style={styles.padding}>Zip code is {this.props.ZipCode}</Text>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    padding: {
        fontSize: 27, color: '#ffffff', textAlign: "center",
        //backgroundColor:'#FAEBD7',
        paddingTop:150,
    },

    container: {},
    backdrop: {
        width: '100%', height: '100%',
        flexDirection: 'column',
        // justifyContent:'center',
        // alignItems: 'center',
    },

});