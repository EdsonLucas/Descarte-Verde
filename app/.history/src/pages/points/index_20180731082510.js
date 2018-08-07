import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Platform } from 'react-native';

const Pontos = () => <View />;

export default class Pontos extends Component {
    render() {
        return(
            <View>

            </View>
        )
    }
}

Pontos.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Icon name="address" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
}

export default Pontos;