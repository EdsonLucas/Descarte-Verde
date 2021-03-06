import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, ImageBackground } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { MaterialCommunityIcons } from 'icons';
import styles from './styles';
import { metrics } from 'styles';

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São postos locais que recebem materiais recicláveis para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        image: require('images/pev.jpg'),
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram materiais recicláveis para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
        image: require('images/comercio.jpg'),
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
        image: require('images/cooperativa.jpg'),
    }
];

export default class Pontos extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="map-marker-multiple" size={(Platform.OS === 'ios') ? 22 : 24} color={tintColor} />
    }

    _renderItem ({item}) {
        return (
            <ImageBackground key={item.key} style={styles.cardContainer} source={item.image}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 0, y: 1}} colors={['transparent', 'rgba(46, 52, 62, 0.6)','rgba(46, 52, 62, 1)']} style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </LinearGradient>
            </ImageBackground>
        );
    }

    render () {
        return (
            <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#00916a" />
                <View style={styles.topoContainer}>
                    <Text style={styles.topoTitle}>Pontos de Descarte</Text>
                </View>

                <Carousel
                data={points}
                layout={'default'}
                loop={false}
                renderItem={this._renderItem}
                sliderWidth={metrics.screenWidth}
                itemWidth={metrics.screenWidth - 90}
                slideStyle={{justifyContent: 'center'}}
                />
            </LinearGradient>
        );
    }
}
