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

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    cardContainer: {
        ...general.box,
        margin: metrics.baseMargin * 2,
        padding: metrics.basePadding * 2,
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
        margin: metrics.baseMargin,
    },

    description: {
        color: colors.dark,
        fontSize: 12,
    },

});


const Sobre = () => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image style={{resizeMode: 'stretch'}}  source={{ uri: 'http://descarteverde.ml/assets/img/logo-white.png'}} width={308} height={58} />
        </View>
        
        <View style={styles.cardContainer}>
            <View style={styles.imageCardContainer}>
                <Image style={{resizeMode: 'stretch'}}  source={require('images/green-idea.png')} width={81} height={117} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Título</Text>
                <Text style={styles.description}>
                    O Descarte Verde é um projeto oferecido pelo Grupo Green Idea te auxiliando na busca pelos pontos de reciclagem mais próximos a você! O Descarte Verde é uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.
                </Text>
            </View>
        </View>

        <View style={[styles.cardContainer, { padding: metrics.basePadding }]}>
            <Text style={styles.description}>
                O Descarte Verde foi desenvolvido por alunos da UVV (Universidade de Vila Velha), com integrantes de cursos de Sistemas de Informação, Markerting, Engenharia e Psicologia.
            </Text>
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