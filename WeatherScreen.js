
import React from 'react'
import Weather from './Weather'
import {Text, Button} from 'react-native'

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
            headerRight: (
                <Button title="Change zip" onPress={() => navigation.navigate('ZipCode')}/>

            )
        }
    }
        render() {
            const ZipCode = this.props.navigation.getParam('ZipCode')
            return (<Weather ZipCode={ZipCode}/>);
        }
    }
    
   