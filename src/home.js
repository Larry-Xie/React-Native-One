import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Icon, SearchBar} from 'react-native-elements'
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
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <Image source={require('../images/map.jpg')} style={styles.contentImage}/>
        );
    }
}

class MyFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.myFooter}>
                <View>
                    <Icon name="wifi-tethering" color="grey" />
                    <Text style={{color:'grey'}}>Flying</Text>
                </View>
                <View>
                    <Icon name="widgets" color="grey" />
                    <Text style={{color:'grey'}}>Steward</Text>
                </View>
                <View>
                    <Icon name="message" color="grey" />
                    <Text style={{color:'grey'}}>Message</Text>
                </View>
                <View>
                    <Icon name="person-pin" color="grey" />
                    <Text style={{color:'grey'}}>Profile</Text>
                </View>
            </View>
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

    header: {
        height: 80,
        paddingTop: 30,
        backgroundColor: '#0CA8F3'
    },

    content: {
        height: 662,
        backgroundColor: 'skyblue'
    },

    footer: {
        height: 70,
        backgroundColor: 'white'
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

    contentImage: {
        width: 375,
        height: 662,
    },

    myFooter: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
