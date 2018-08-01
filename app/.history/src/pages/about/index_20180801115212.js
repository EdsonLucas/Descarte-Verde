import React from 'react';
import { Ionicons } from 'fonts';
import { View, Platform } from 'react-native';

const Sobre = () => (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image />
            </View>
            <View style={styles.textContainer}>
                <Text>Título</Text>
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