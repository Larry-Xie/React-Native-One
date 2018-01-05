import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomePage from './src/home';
import MainTabBar from './src/main-tab-bar';
import StewardPage from './src/steward';

export default class App extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <MainTabBar />}>
                <HomePage tabLabel="wifi-tethering" />
                <StewardPage tabLabel="widgets" />
                <StewardPage tabLabel="message" />
                <StewardPage tabLabel="person-pin" />
            </ScrollableTabView>
        );
    }
}
