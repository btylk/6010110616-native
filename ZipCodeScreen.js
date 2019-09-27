import React from 'react'
import {
    StyleSheet, FlatList, View, Text,
    TouchableHighlight,ImageBackground
} from 'react-native';
const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Chumphon', code: '86110'},
]
// const ZipItem = ({ place, code, navigate }) => (
//     <View style={styles.zipItem}>
//         <Text style={styles.zipPlace}>{place}</Text>
//         <Text style={styles.zipCode}>{code}</Text>
//     </View>
// )
const ZipItem = ({ place, code, navigate }) => (
    <TouchableHighlight onPress={() => navigate('Weather', { ZipCode: code })}>
        <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code
export default class WeatherScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../bg6.jpeg')} style={styles.backdrop}>
            <View>
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    zipItem : {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    zipPlace : {
        alignItems: 'center',
        fontSize: 20,
        color: '#ffffff',
    },
    zipCode : {
        alignItems: 'center',
        fontSize: 20,
        color: '#ffffff',
    },
    backdrop: {
        width: '100%', height: '100%',
    }
    
})
