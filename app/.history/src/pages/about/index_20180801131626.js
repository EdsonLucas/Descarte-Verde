import React from 'react';
import { Ionicons } from 'fonts';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.secundary,
    },

    cardContainer: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor: 'red',
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: metrics.basePadding * 2,
        backgroundColor: 'white',
    },

    textContainer: {
        alignItems: 'center',
        padding: metrics.basePadding * 3,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
    },

    description: {
        color: colors.dark,
        fontSize: 12,
    },

});


const Sobre = () => (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={{alignSelf: 'stretch'}}  source={require('images/green-idea.png')} width={81} height={82} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Título</Text>
                <Text style={styles.description}>Lorem Ipsum...</Text>
            </View>
        </View>
    </View>
);

Sobre.navigationOptions = {
    title: 'Sobre o Descarte Verde',
    swipeEnabled: false,
    headerStyle: {
    backgroundColor: '#fff',
    height: (Platform.OS === 'ios') ? 48 : 50,
    },
    headerTintColor: colors.dark,
    headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    tabBarIcon: ({ tintColor }) => <Ionicons name="md-information-circle" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;