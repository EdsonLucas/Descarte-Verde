import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Entypo } from 'fonts';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secundary,
        padding: metrics.basePadding * 2,
    },

    subContainer: {
        flex: 1,
        backgroundColor: 'red'
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São os locais que recebem embalagens longa vida (entre outros materiais) para serem enviados à reciclagem. É o primeiro passo do processo, onde o material doméstico (pouco volume) geralmente é entregue. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas. Após a fase da coleta, as embalagens longa vida, já enfardadas, são enviadas às empresas recicladoras, que vão se encarregar de separar os elementos que compõem as embalagens e transformá-los em matéria-prima para uma série de aplicações.',
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável (inclusive embalagem longa vida) para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
    }
];

const Pontos = ({ points }) => (
    <View styles={styles.container}>
        {
            points.map(point => {
            <View key={point.key} styles={styles.subContainer}>
                <Text>{point.title}</Text>
            </View>
            })
        }
    </View>
);

Pontos.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
}

export default Pontos;