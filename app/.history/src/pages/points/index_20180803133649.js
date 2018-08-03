import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Image } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { Entypo } from 'icons';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topoContainer: {
        backgroundColor: colors.white,
        marginTop: (Platform.OS === 'ios') ? 24 : 0,
        marginBottom: metrics.baseMargin,
        shadowColor: colors.black,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 100,
        elevation: 5,
  },

    topoTitle: {
        ...general.title,
        fontSize: 18,
        textAlign: 'center',
        flexGrow: 1,
        color: colors.dark,
        padding: metrics.basePadding,
    },
    
    cardContainer: {
        flex: 0.9,
        padding: 0,
        backgroundColor: colors.white,
        marginHorizontal: metrics.baseMargin * 2,
        marginBottom: metrics.baseMargin,
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
        paddingHorizontal: metrics.basePadding,
        paddingVertical: metrics.basePadding * 4,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: colors.title,
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: colors.text,
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São postos locais que recebem materiais recicláveis para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        image: 'http://www.cachoeiro.es.gov.br/secretarias/semcos/fotonoticias/c1229_pev.jpg',
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
        image: 'https://s3.us-east-2.amazonaws.com/descarte-verde/1507318211514.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSKAAnH1S2aU3MnCZFnoY6yURzL5OM6D33ke5LRFa2J7AsP6zgVH65G89zh%2BemA9J73e14Cu6%2B%2FNDSE1t1UZsqQpnLlcvZktLSuqT%2BOaufKGwJM8YDmzB%2BTHzTBnnVXfdbeDghmNB6f%2FvJEB9Lt4VyZyA5O1qIH6mTWMoDCveEOtDsIrsCGlit%2BYE6aSbkzDmdtBA9Iz1jW%2FGADxQLRRZi28uJtBHI1XexqEKOhCap4YPcfbkLMn4onL1mLIZ3gRiRTdPrKuPjvDfpDD8GPiyh20LggtzHXl90ID04M3KGrIvqdnsBB4oKHjm8VmpxwYxx83pHu4w6HLE12Ur3v1Mttnu38q2wMIdRAAGgw2MDM5NzU4OTg2MzQiDPjvXxOUoPmaj5GL0iq4A3fhvChzbfANqRC276aHKE%2BRpYf8FQalOKR4%2BnsjyguEBBJ8yZKPL2olUA4uy6vl8%2B6py%2B7y%2FpIPLIEZitUvyR1L10SPyTo3PTQt5YGpEYOdVCoA0RejLLDqqufZ4OJuTAg2orVH0oD%2FFvrDCfsqydxhubPa4RfDtMdogngdkZ%2FOF%2BfvjJk4gHcoG01LLrBeQQYT8XK9t7aVqezGECx1fZpJHj7ZT%2BlrEpAyOVUgtefrsXHFLSCFYLzHctAGY0ikWs23SQTgx6RsQRH%2FWpBMz7qffrMprmT8T%2Fq7v5DD43p7Ia0gQN6S2HwN1kvdhH2jQtTc1U%2FI5q9yJAaiLH4kBCY99MrIzT0b%2BpGEh2iQ4%2FF78B6QKSvrVM0E29080kbk74N2jz7usyg66xDWVeE0KwD03ZjbOd8Ce%2BaMkFf8xlmhGEu13VpTZIPdt8A7lKnK5RxI8bY6FMZtOsvz2gwzhvfZY2N66%2B9jGhcUmb77TQ7Jmd9NtjwkYoohM79UcjNF9O5WkhzZo%2BEC1jN%2FG1IsnwvZ22OVgHJiOyk3PCperrbvcdco0zj0y71jX3WbsCrzDEZ9yiVoi%2FPZMKn3kNsF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180803T143944Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYZH6E2YFMLOYJGAJ%2F20180803%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=b428f49247dbfc3a803c11cc4169aa4670e8cf75361924609a4f3b1da0cd46e4',
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
        image: 'http://cdn.abcdoabc.com.br/semasa-renova-parceria-cooperativas-reciclagem_6c44a3ee.jpg',
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
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Entypo name="address" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
    }

    _renderItem ({item, index}) {
        return (
            <ImageBackground key={item.key} style={styles.cardContainer} >
                <View style={styles.imageContainer}>
                    <ResponsiveImage style={{ resizeMode: 'stretch' }} source={{ uri: item.image }} initWidth={metrics.screenWidth} initHeight={190} />
                </View>    
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>        
            </ImageBackground>
        );
    }
 
    render () {
        return (
            <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#dea779', '#afa595','#adbdbf']} style={styles.container}>
               <View style={styles.topoContainer}>
                    <Text style={styles.topoTitle}>Pontos de Descarte</Text>
                </View>
                <Carousel
                data={points}
                layout={'tinder'}
                layoutCardOffset={18}
                loop={true}
                renderItem={this._renderItem}
                sliderWidth={metrics.screenWidth}
                itemWidth={metrics.screenWidth}
                slideStyle={{justifyContent: 'center'}}
                />
            </LinearGradient>
        );
    }
}