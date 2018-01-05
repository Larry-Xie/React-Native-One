import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Icon, List, ListItem} from 'react-native-elements';

class MyHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    render() {
        return (
            <View style={styles.myHeader}>
                <Text style={styles.headerText}>我的优云</Text>
            </View>
        );
    }
}

class MyInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.myInformation}>
                <Image source={require('../images/avatar.png')} style={styles.informationAvatar}/>
                <View style={styles.informationContent}>
                    <Text style={styles.informationItem}>醉清风</Text>
                    <Text style={styles.informationItem}>clisely@qq.com</Text>
                    <Text style={styles.informationItem}>南京市</Text>
                </View>
                <Icon name="chevron-right" color="grey" size={25} />
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
                title: '账户安全',
                icon: 'verified-user'
            },
            {
                title: '通用',
                icon: 'view-module'
            },
            {
                title: '电子合格证',
                icon: 'account-box'
            },
            {
                title: '分享App',
                icon: 'share'
            },
            {
                title: '关于掌上优云',
                icon: 'report'
            },
            {
                title: '帮助与反馈',
                icon: 'help-outline'
            }
        ];
        return (
            <View>
                <MyInformation />
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
            </View>
        );
    }
}

export default class ProfilePage extends Component {
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
    },

    myInformation: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 150,
        paddingLeft: 15,
        paddingRight: 10,
        backgroundColor: '#FFFFFF'
    },

    informationAvatar: {
        borderRadius: 5,
        width: 100,
        height: 100,
        marginRight: 15
    },

    informationContent: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },

    informationItem: {
        fontSize: 18,
        height: 40,
        lineHeight: 40
    }
});
