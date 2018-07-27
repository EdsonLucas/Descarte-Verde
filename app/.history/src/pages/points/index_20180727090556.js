import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Platform } from 'react-native';

const Pontos = () => <View />;

Pontos.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Icon name="address" size={(Plataform.OS === 'ios') ? 18 : 25} color={tintColor} />
}

export default Pontos;