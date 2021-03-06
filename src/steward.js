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
                <Text style={styles.headerText}>我的管家</Text>
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
                title: '无人机注册',
                icon: 'contacts'
            },
            {
                title: '飞行计划申请',
                icon: 'touch-app'
            },
            {
                title: '飞行记录',
                icon: 'history'
            },
            {
                title: '保险服务',
                icon: 'beenhere'
            },
        ];
        return (
            <List>
                {
                    lists.map((item, i) => (
                        <ListItem
                            key={i}
                            title={item.title}
                            leftIcon={{name: item.icon}}
                        />
                    ))
                }
            </List>
        );
    }
}

export default class StewardPage extends Component {
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
