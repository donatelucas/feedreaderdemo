import React, {Component} from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import Header from './components/Header';
import Card from './components/Card';

export default class App extends Component {
  render() {
    return (
        <View style = { styles.container }>
            <Header />
            <Card />
        </View>
    );
  }
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white'
    }
})
