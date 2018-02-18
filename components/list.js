import React from 'react';
import { Image, ActivityIndicator, ListView } from 'react-native';

import Row from './weather/row';

export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: `Méteo de ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/sun.png')} style={{ width: 25, height:25 }}/>
            }
        }
    };

    constructor (props) {
        super(props);
        this.state = {
            city: this.props.navigation.state.params.city,
            data: null
        };
        setTimeout(() => {
            this.fetchWeather()
        }, 1000);
    }

    fetchWeather () {
            fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},fr&units=metric&APPID=<"KeyAPI">`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({data: responseJson})
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
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.data.list)}
                    renderRow={(row, j, k) => <Row day={row} index={parseInt(k, 10)}/>}
                />
            )
        }
    }
}