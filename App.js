import React, {Component} from 'react';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import {StackNavigator} from 'react-navigation';

import HomePage from './src/home';
import MainTabBar from './src/main-tab-bar';
import MessagePage from './src/message';
import MyUAVPage from './src/my-uav';
import ProfilePage from './src/profile';
import StewardPage from './src/steward';

class AppPage extends Component {
    render() {
        return (
            <ScrollableTabView tabBarPosition="bottom" renderTabBar={() => <MainTabBar />}>
                <HomePage navigate={this.props.navigation.navigate} tabLabel="wifi-tethering" />
                <StewardPage tabLabel="widgets" />
                <MessagePage tabLabel="message" />
                <ProfilePage tabLabel="person-pin" />
            </ScrollableTabView>
        );
    }
}

export const MyApp = StackNavigator({
    Home: { screen: AppPage, navigationOptions: {header: null} },
    MyUAV: { screen: MyUAVPage, navigationOptions: {header: null} },
});

export default class App extends Component {
    render() {
        return (
            <MyApp />
        )
    }
}