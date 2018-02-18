import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/fr';
import FadeInView from '../animation/fadeIn'

moment.locale('fr');

export default class Row extends React.Component {

    static propTypes = {
        day: PropTypes.object,
        index: PropTypes.number
    };

    day () {
        let day = moment(this.props.day.dt * 1000).format('ddd');
        return (
            <Text style={[style.white, style.bold]}>{ day.toUpperCase() }</Text>
        )
    }

    icon () {
        const type = this.props.day.weather[0].icon;
        if (type) {
            return <Image style={style.img} source={{uri: `http://openweathermap.org/img/w/${type}.png`}} />
        } else {
            return false;
        }
    }

    date () {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text style={style.white}>{ date }</Text>
        )
    }

    render () {
        return (
            <FadeInView delay={this.props.index * 50}>
                <View style={style.view}>
                    <Text>{ this.day() } { this.date() }</Text>
                    { this.icon() }
                    <Text style={style.temp}>{Math.round(this.props.day.main.temp)}°C</Text>
                </View>
            </FadeInView>
        )
    }
}

const style = StyleSheet.create({
    white: {
        color: '#fff'
    },
    bold: {
      fontWeight: 'bold'
    },
    img: {
        width: 50,
        height: 50
    },
    view: {
        backgroundColor: '#74b9ff',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#0984e3',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    temp: {
       color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
});