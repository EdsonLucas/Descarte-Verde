import React from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from 'fonts';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secundary,
        paddingTop: metrics.basePadding / 5,
    },
    
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: metrics.baseMargin / 2,
        padding: metrics.basePadding,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
    },

    imageContainer: {
        justifyContent: 'center',
        borderRadius: metrics.baseRadius,
    },

    subContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: metrics.basePadding,
    },

    title: {
        fontSize: 17,
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
        description: 'São postos locais que recebem materiais recicláveis para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
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
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
        backgroundColor: '#4972a4',
    }
];

const Pontos = () => (
    <View style={styles.container}>
    {
        points.map(point => (
        <View key={point.key} style={[styles.cardContainer, { backgroundColor: point.backgroundColor }]} >
            <View style={styles.imageContainer}>
                <Image style={{alignSelf: 'stretch'}}  source={{uri: 'https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png'}} width={80} height={80} />
            </View>
            <View style={styles.subContainer}>
                <Text style={styles.title}>{point.title}</Text>
                <Text style={styles.description}>{point.description}</Text>
            </View>
        </View>
        ))
    }
    </View>
);

Pontos.navigationOptions = {
        title: 'Pontos de Descarte',
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
    tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Pontos;