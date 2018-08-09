import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Entypo } from 'icons';
import { general, colors, metrics } from 'styles';
import Carousel from 'react-native-snap-carousel';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.third,
        paddingTop: metrics.basePadding / 2,
    },
    
    cardContainer: {
        ...general.box,
        flexDirection: 'row',
        marginHorizontal: metrics.baseMargin * 2,
        marginBottom: metrics.baseMargin,
        padding: 0,
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
        padding: metrics.basePadding,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: colors.white,
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: colors.white,
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São postos locais que recebem materiais recicláveis para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        image: 'http://www.cachoeiro.es.gov.br/secretarias/semcos/fotonoticias/c1229_pev.jpg',
        backgroundColor: colors.info,
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
        image: 'http://www.cachoeiro.es.gov.br/secretarias/semcos/fotonoticias/c1229_pev.jpg',
        backgroundColor: colors.danger,
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
        image: 'http://cdn.abcdoabc.com.br/semasa-renova-parceria-cooperativas-reciclagem_6c44a3ee.jpg',
        backgroundColor: colors.warning,
    }
];

// const Pontos = () => (
//     <View style={styles.container}>
//     {
//         points.map(point => (
//         <View key={point.key} style={[styles.cardContainer, { backgroundColor: point.backgroundColor }]} >
//             <View style={styles.subContainer}>
//                 <Text style={styles.title}>{point.title}</Text>
//                 <Text style={styles.description}>{point.description}</Text>
//             </View>
//             <View style={styles.imageContainer}>
//                 <ResponsiveImage style={{ resizeMode: 'stretch' }} source={{ uri: point.image }} initWidth={120} initHeight={190} />
//             </View>            
//         </View>
//         ))
//     }
//     </View>
// );

// Pontos.navigationOptions = {
//     title: 'Pontos de Descarte',
//     swipeEnabled: false,
//     headerStyle: {
//         backgroundColor: colors.main,
//         height: (Platform.OS === 'ios') ? 48 : 50,
//         shadowOffset:{ width: 5, height: 5 },
//         shadowColor: colors.black,
//         shadowOpacity: 0.5,
//         elevation: 5,
//     },
//     headerTintColor: colors.white,
//     headerTitleStyle: {
//         fontFamily: 'Roboto-Light',
//         fontSize: 16,
//         textAlign: 'center',
//         flexGrow: 1
//     },
//     tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
// }

// export default Pontos;


export default class Pontos extends Component {
    static navigationOptions = {
    title: 'Pontos de Descarte',
    swipeEnabled: false,
    headerStyle: {
        backgroundColor: colors.main,
        height: (Platform.OS === 'ios') ? 48 : 50,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
    },
    headerTintColor: colors.white,
    headerTitleStyle: {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        textAlign: 'center',
        flexGrow: 1
    },
    tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

    _renderItem ({item, index}) {
        return (
            <View key={item.key} style={[styles.cardContainer, { backgroundColor: item.backgroundColor }]} >
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
                <View style={styles.imageContainer}>
                    <ResponsiveImage style={{ resizeMode: 'stretch' }} source={{ uri: item.image }} initWidth={120} initHeight={190} />
                </View>            
            </View>
        );
    }
 
    render () {
        return (
            <View style={styles.container}>
                <Carousel
                data={points}
                layout={'stack'}
                renderItem={this._renderItem}
                sliderWidth={metrics.screenWidth}
                itemWidth={metrics.screenWidth}
                inactiveSlideOpacity={0.8}
                inactiveSlideScale={0.8}
                />
            </View>
        );
    }
}