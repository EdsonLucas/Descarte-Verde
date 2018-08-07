import React from 'react';
import { MaterialCommunityIcons } from 'fonts';
import { View, Platform } from 'react-native';

const Sobre = () => <View />;

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="info" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;