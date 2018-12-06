import React, { Component } from 'react';
import { AppRegistry, Dimensions, StyleSheet, Text, View } from 'react-native';

let WIDTH = Dimensions.get('window');

class Header extends Component {
    render() {
        return (
            <View>
                <View style = { styles.fixer } ></View>
                <View style = { styles.header } >
                    <Text style = { styles.text } > Feed Reader </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    fixer: {
        backgroundColor: 'white',
        padding: 20
    },
    header: {
        backgroundColor: '#0A1128',
        padding: 10
    },
    text: {
        color: '#FEFCFB',
        fontSize: 20,
        textAlign: "center"
    },
})

export default Header;

AppRegistry.registerComponent('Header', () => Header);
