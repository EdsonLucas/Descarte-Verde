import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View } from 'react-native';

const Pontos = () => <View />;

Pontos.navigationOptions = {
    header: null,
    tabBarIcon: ({ tintColor }) => <Icon name="address" size={20} color={tintColor} />
}

export default Pontos;