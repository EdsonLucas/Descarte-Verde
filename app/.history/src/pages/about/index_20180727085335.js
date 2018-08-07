import React from 'react';
import Icon from 'react-native-vector-icons/Foundation';
import { View } from 'react-native';

const Sobre = () => <View />;

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Icon name="info" size={18} color={tintColor} />
}

export default Sobre;