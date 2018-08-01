import React from 'react';
import { Ionicons } from 'fonts';
import { View, Platform } from 'react-native';

const Sobre = () => (
    <View>
        <View>
            <View>
                <Image />
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    </View>
);

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Ionicons name="md-information-circle" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;