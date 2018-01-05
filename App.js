import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import HomePage from './src/home';
import MainTabBar from './src/main-tab-bar';
import MessagePage from './src/message';
import ProfilePage from './src/profile';
import StewardPage from './src/steward';

export default class App extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <MainTabBar />}>
                <HomePage tabLabel="wifi-tethering" />
                <StewardPage tabLabel="widgets" />
                <MessagePage tabLabel="message" />
                <ProfilePage tabLabel="person-pin" />
            </ScrollableTabView>
        );
    }
}
