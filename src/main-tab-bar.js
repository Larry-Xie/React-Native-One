import React, {Component} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

export default MainTabBar = createReactClass({
    propTypes: {
        goToPage: PropTypes.func,
        activeTab: PropTypes.number,
        tabs: PropTypes.array,
        renderTab: PropTypes.func,
    },

    getTabTitle(name) {
        switch(name) {
            case 'wifi-tethering': return 'Radar';
            case 'widgets': return 'Steward';
            case 'message': return 'Message';
            case 'person-pin': return 'Mine';
            default: return 'Test';
        }
    },

    renderTab(name, page) {
        const isTabActive = this.props.activeTab === page;
        const color = isTabActive ? '#0CA8F3' : 'grey';
        const tabTitle = this.getTabTitle(name);
        const tabTitleStyle = {
            color: color,
            fontWeight: isTabActive ? 'bold' : 'normal',
        };
    
        return (
            <TouchableOpacity key={name} onPress={() => this.props.goToPage(page)} style={styles.tab}>
                <Icon name={name} size={25} color={color} />
                <Text style={tabTitleStyle}>{tabTitle}</Text>
            </TouchableOpacity>
        )
    },
  
    render() {
        const containerWidth = this.props.containerWidth;
        const numberOfTabs = this.props.tabs.length;
        const tabUnderlineStyle = {
            position: 'absolute',
            width: containerWidth / numberOfTabs,
            height: 5,
            backgroundColor: '#0CA8F3',
            bottom: 0,
        };
        const translateX = this.props.scrollValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0,  containerWidth / numberOfTabs],
        });

        return (
            <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
                {this.props.tabs.map((name, page) => this.renderTab(name, page))}
                <Animated.View style={[{transform: [{ translateX }]}]} />
            </View>
        );
    },
});

const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabs: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#ccc',
    },
});