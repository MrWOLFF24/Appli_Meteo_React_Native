import React from 'react';
import { View, TextInput, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import List from './list';

import style from '../style';

class Home extends React.Component {

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image source={require('./icons/homepage.png')} style={{ width: 25, height:25 }}/>
        }
    };

    constructor (props) {
        super(props)
        this.state = { city: 'Paris' }
    }

    submit() {
        this.props.navigation.navigate('result', {city: this.state.city})
    }

    render () {
        return (

            <View style={style.container}>
                <Image
                    source={require('./icons/logoMeteo.png')}
                />
                <TextInput
                    onChangeText={ (city) => this.setState({city}) }
                    style={style.inputSearch}
                    value={ this.state.city }
                />
                <View style={style.btnSubmit}>
                    <Button style={style.button} title={'Rechercher'} onPress={() => this.submit()} />
                </View>
            </View>
        )

    }
}

export default StackNavigator({
    result: {
        screen: List
    },
    Home: {
       screen: Home
    }
})

