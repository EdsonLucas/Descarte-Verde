import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Platform } from 'react-native';

const Pontos = () => <View />;

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