import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from 'fonts';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: metrics.basePadding,
    },

    subContainer: {
        flex: 1,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.darker,
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        fontSize: 14,
        color: colors.dark,
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São postos locais que recebem embalagens longa vida (entre outros materiais) para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        backgroundColor: '#a6cde1',
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
        backgroundColor: '#f5848a',
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável (inclusive embalagem longa vida) para beneficiamento e envio aos recicladores.',
        backgroundColor: '#6cd8d4',
    }
];

const Pontos = () => (
    points.map(point => (
    <View key={point.key} style={[styles.container, { backgroundColor: point.backgroundColor}]} start={{x: 1, y: 0.5}} end={{x: 0, y: 1}}>
        <View style={styles.subContainer}>
            <Text style={styles.title}>{point.title}</Text>
            <Text style={styles.description}>{point.description}</Text>
        </View>
    </View>
    ))
);

Pontos.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
}

export default Pontos;