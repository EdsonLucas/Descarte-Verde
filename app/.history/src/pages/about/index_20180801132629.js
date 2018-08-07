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
        padding: metrics.basePadding * 6,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
        backgroundColor: 'red',
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: metrics.basePadding,
        backgroundColor: 'white',
    },

    textContainer: {
        alignItems: 'center',
        padding: metrics.basePadding,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        margin: metrics.baseMargin,
    },

    description: {
        flex: 1,
        color: colors.dark,
        fontSize: 12,
    },

});


const Sobre = () => (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={{resizeMode: 'stretch'}}  source={require('images/green-idea.png')} width={81} height={117} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Título</Text>
                <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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