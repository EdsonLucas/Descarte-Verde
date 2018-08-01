import React from 'react';
import { Ionicons } from 'fonts';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secundary,
    },

    cardContainer: {
        ...general.box,
        marginHorizontal: metrics.basePadding,

    },

    imageContainer: {

    },

    textContainer: {

    },

});


const Sobre = () => (
    <View style={styles.container}>
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={{alignSelf: 'stretch'}}  source={{uri: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'}} width={80} height={80} />
            </View>
            <View style={styles.textContainer}>
                <Text>Título</Text>
                <Text>Lorem Ipsum...</Text>
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