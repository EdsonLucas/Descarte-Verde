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
        padding: metrics.basePadding * 6,
        backgroundColor: 'blue',
    },

    imageGrid: {
        justifyContent: 'space-between',
    },

    textContainer: {
        alignItems: 'center',
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
                <View style={styles.imageGrid}>
                    <Image style={{alignSelf: 'stretch'}}  source={{uri: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'}} width={80} height={80} />
                </View>
                <View style={styles.imageGrid}>
                    <Image style={{alignSelf: 'stretch'}}  source={{uri: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'}} width={80} height={80} />
                </View>
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