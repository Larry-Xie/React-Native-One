import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import ScrollableTabView from 'react-native-scrollable-tab-view';

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.myHeader}>
                <Icon name="menu" color="white" />
                <TextInput
                    style={styles.headerText}
                    placeholder="Search"
                    onChangeText ={(text) => this.setState({text})}
                    onSubmitEditing={(text) => this.setState({text: 'Complete'})}
                />
                <Icon name="settings" color="white" />
            </View>
        );
    }
}

class MyContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MapView 
                style={styles.map}
                initialRegion={{
                    latitude: 32.0603,
                    longitude: 118.7969,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                showsUserLocation={true}
                followsUserLocation={true}
            />
        );
    }
}

export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}><MyHeader /></View>
                <View style={styles.content}><MyContent /></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },

    map: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },

    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#0CA8F3'
    },

    content: {
        height: 672,
        backgroundColor: 'skyblue'
    },

    myHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    headerText: {
        fontSize: 16,
        padding: 5,
        borderRadius: 3,
        width: 280,
        backgroundColor: 'white',
    },
});
