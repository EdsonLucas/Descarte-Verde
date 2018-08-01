import React from 'react';
import { Foundation } from 'fonts';
import { View, Platform } from 'react-native';

const Sobre = () => <View />;

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Foundation name="info" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;