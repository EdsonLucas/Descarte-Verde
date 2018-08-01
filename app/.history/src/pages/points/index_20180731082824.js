import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Platform, StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        bac
    },
});

export default class Pontos extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Icon name="address" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
    }
    
    render() {
        return(
            <View styles={styles.container}>
                <View styles={styles.subcontainer}></View>
                <View styles={styles.subcontainer}></View>
                <View styles={styles.subcontainer}></View>
            </View>
        )
    }
}