import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/team.png')} style={{ width: 30, height:30 }}/>
        }
    };

    search () {
        this.props.navigation.navigate('Home');
    }

    render () {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos</Text>

                <Text style={style.content}>Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Ipsam, Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Ipsam. Gipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Ipsam, Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Ipsam.
                </Text>

                <Button title={'Rechercher'} onPress={() => this.search()} />
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        fontSize: 30,
        marginBottom: 20
    },
    content: {
        padding: 20,
        textAlign: 'center'
    }
});