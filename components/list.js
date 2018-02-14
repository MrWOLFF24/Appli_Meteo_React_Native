import React from 'react';
import { Text, Image, ActivityIndicator } from 'react-native';

export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            /*title: `Méteo de ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/sun.png')} style={{ width: 25, height:25 }}/>
            }*/
        }
    };

    constructor (props) {
        super(props);
        this.state = {
            city: 'Paris', //this.props.navigation.state.params.city,
            data: null
        };
        this.fetchWeather()
    }

    fetchWeather () {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},fr&APPID=7c2fd9ffdeae409382f72398d6d8a3cc`)
            .then((response) => response.json())
            .then((responseJson) => {
               console.log(responseJson);
                //return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render () {
        if (this.state.data === null) {
            return (
                <ActivityIndicator size="large" color="#0000ff" />
            )
        } else {
            return (
                <Text>Hello</Text>
            )
        }
    }
}