import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon, List, ListItem} from 'react-native-elements';

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.myHeader}>
                <Text style={styles.headerText}>消息</Text>
            </View>
        );
    }
}

class MyContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const lists = [
            {
                title: '返航通知',
                subtitle: '无返航通知',
                icon: 'location-on'
            },
            {
                title: '报批通知',
                subtitle: '无报批通知',
                icon: 'work'
            },
            {
                title: '管制通知',
                subtitle: '无管制通知',
                icon: 'flight'
            }
        ];
        return (
            <List>
                {
                    lists.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            subtitle={item.subtitle}
                            leftIcon={{name: item.icon}}
                        />
                    ))
                }
            </List>
        );
    }
}

export default class MessagePage extends Component {
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
        height: 672,
        backgroundColor: '#E8E8E8'
    },

    myHeader: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontSize: 20,
        color: 'white',
    }
});
