import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomePage from './src/home';
import MainTabBar from './src/main-tab-bar';

export default class App extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <MainTabBar />}>
                <HomePage tabLabel="wifi-tethering" />
                <HomePage tabLabel="widgets" />
                <HomePage tabLabel="message" />
                <HomePage tabLabel="person-pin" />
            </ScrollableTabView>
        );
    }
}
