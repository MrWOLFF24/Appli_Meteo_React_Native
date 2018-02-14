import React from 'react';
import { View, Text } from 'react-native';

export default class Row extends React.Component {

    /*static propTypes = {
        day: React.propTypes.object,
        index: React.propTypes.number
    }*/

    render () {
        return (
            <View>
                <Text>{this.props.day}</Text>
            </View>
        )
    }
}