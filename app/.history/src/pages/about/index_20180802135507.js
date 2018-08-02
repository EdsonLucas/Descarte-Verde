import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Ionicons } from 'icons';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: colors.main,
    },

    imageContainer: {
        justifyContent: 'center',
        paddingTop: 0,
        padding: metrics.basePadding,
    },

    cardContainer: {
        ...general.box,
        marginLeft: metrics.baseMargin * 2,
        marginRight: metrics.baseMargin * 2,
        marginTop: metrics.baseMargin,
        marginBottom: metrics.baseMargin,
        padding: metrics.basePadding,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
    },

    imageCardContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.basePadding / 5,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        fontFamily: 'Roboto-Bold',
        margin: metrics.baseMargin,
    },

    description: {
        color: colors.text,
        fontSize: 14,
        fontFamily: 'Roboto-Regular',
    },

});


const Sobre = () => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <ResponsiveImage style={{resizeMode: 'stretch'}}  source={{uri: 'http://descarteverde.ml/assets/img/logo-white.png'}} initWidth={360} initHeight={70} />
        </View>
        
        <View style={styles.cardContainer}>
            {/* <View style={styles.imageCardContainer}>
                <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/green-idea.png')} initWidth={81} initHeight={117} />
            </View> */}
            <View style={styles.textContainer}>
                <Text style={styles.title}>Sobre o app</Text>
                <Text style={styles.description}>
                    O Descarte Verde é um serviço oferecido pelo Grupo Green Idea. O Descarte verde te auxilia na busca pelos pontos de reciclagem mais próximos a você! O Descarte Verde é uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.
                </Text>
            </View>
        </View>

        <View style={styles.cardContainer}>
            <Text style={styles.description}>
                O Descarte Verde foi desenvolvido por alunos da UVV (Universidade de Vila Velha), com integrantes de cursos de Sistemas de Informação, Markerting, Engenharia e Psicologia.
            </Text>
        </View>
    </View>
);

Sobre.navigationOptions = {
    title: 'Sobre',
    swipeEnabled: false,
    headerStyle: {
        backgroundColor: colors.white,
        height: (Platform.OS === 'ios') ? 48 : 50,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
    },
    headerTintColor: colors.text,
    headerTitleStyle: {
        fontFamily: 'Impact',
        fontSize: 16,
    },
    tabBarIcon: ({ tintColor }) => <Ionicons name="md-information-circle" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;
