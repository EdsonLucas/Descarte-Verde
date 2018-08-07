import React from 'react';
import { Ionicons } from 'fonts';
import { View, Platform } from 'react-native';

const Sobre = () => <View />;

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Ionicons name="information" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;