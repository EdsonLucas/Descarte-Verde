import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import { View, Platform } from 'react-native';

const Sobre = () => <View />;

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Icon name="info" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
}

export default Sobre;