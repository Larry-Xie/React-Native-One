import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon, List, ListItem} from 'react-native-elements';

class MyHeader extends Component {
    render() {
        return (
            <View style={styles.myHeader}>
                <Icon style={styles.leftIcon} name="chevron-left" color="white" size={30} onPress={() => this.props.navigate('Home') } />
                <Text style={styles.headerText}>我的无人机</Text>
                <Icon style={styles.rightIcon} name="chevron-right" color="#0CA8F3" size={30} />
            </View>
        );
    }
}

class UAVCard extends Component {
    render() {
        return (
            <View style={styles.cardContainer}>

            </View>
        );
    }
}

class MyContent extends Component {
    render() {
        return (
            <View style={styles.mainContent}>
                <UAVCard />
            </View>
        );
    }
}

export default class MyUAVPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}><MyHeader navigate={this.props.navigation.navigate} /></View>
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
        height: 672,
        backgroundColor: '#E8E8E8'
    },

    mainContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    myHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    leftIcon: {
        width: 25,
        marginLeft: 20
    },

    headerText: {
        fontSize: 20,
        color: '#FFFFFF'
    },

    rightIcon: {
        width: 25,
        marginRight: 20
    },

    cardContainer: {
        width: '90%',
        height: 100,
        backgroundColor: '#FFFFFF'
    }
});
