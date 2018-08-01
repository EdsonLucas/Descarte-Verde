import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from 'fonts';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    subContainer: {
        flex: 1,
        padding: metrics.basePadding,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        fontSize: 14,
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São os locais que recebem embalagens longa vida (entre outros materiais) para serem enviados à reciclagem. É o primeiro passo do processo, onde o material doméstico (pouco volume) geralmente é entregue. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        backgroundColor: ['#4c669f', '#3b5998', '#192f6a'],
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas. Após a fase da coleta, as embalagens longa vida, já enfardadas, são enviadas às empresas recicladoras, que vão se encarregar de separar os elementos que compõem as embalagens e transformá-los em matéria-prima para uma série de aplicações.',
        backgroundColor: ['#4c669f', '#3b5998', '#192f6a'],
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável (inclusive embalagem longa vida) para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
        backgroundColor: ['#4c669f', '#3b5998', '#192f6a'],
    }
];

const Pontos = () => (
    <View style={styles.container}>
        {
            points.map(point => (
            <LinearGradient key={point.key} style={styles.subContainer} colors={point.backgroundColor} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}}>
                <Text style={styles.title}>{point.title}</Text>
                <Text style={styles.description}>{point.description}</Text>
            </LinearGradient>
            ))
        }
    </View>
);

Pontos.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
}

export default Pontos;