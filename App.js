import React from 'react';
import { TabNavigator } from 'react-navigation';

import About from './components/about';
import Home from './components/home'

const Tabs = TabNavigator({
    Home: { screen: Home },
    About: { screen: About }
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        pressColor: '#1abc9c'
    }
});

export default class App extends React.Component {
  render() {
      return (
          <Tabs/>
      );
  }
}
