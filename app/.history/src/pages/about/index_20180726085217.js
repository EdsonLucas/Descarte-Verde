import React from 'react';
import Icon from 'react-native-vector-icons';
import { View } from 'react-native';

const Sobre = () => <View />;

Sobre.navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => <Icon name="info" size={18} color={tintColor} />
}

export default Sobre;