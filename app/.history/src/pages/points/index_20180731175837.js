import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from 'fonts';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: metrics.basePadding,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
    },

    subContainer: {
        flex: 1,
    },

    title: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.white,
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        fontSize: 14,
        color: colors.lighter,
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São postos locais que recebem embalagens longa vida (entre outros materiais) para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        backgroundColor: '#40c4c0',
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
        backgroundColor: '#4fa9ce',
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável (inclusive embalagem longa vida) para beneficiamento e envio aos recicladores.',
        backgroundColor: '#4972a4',
    }
];

const Pontos = () => (
    points.map(point => (
    <View key={point.key} style={[styles.container, { backgroundColor: point.backgroundColor }]} >
        <View>
            <Image source={uri: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'} />
        </View>
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