import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Platform } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import Carousel from 'react-native-snap-carousel';
import { general, metrics, colors } from 'styles';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

const locations = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São postos locais que recebem materiais recicláveis para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
        image: require('images/pev.jpg'),
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
        image: require('images/comercio.jpg'),
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
        image: require('images/cooperativa.jpg'),
    }
];

export default class Map extends Component {
    static navigationOptions = {
        header: null,
    };

  renderAnnotations() {
    return (
    <View>
      <Mapbox.PointAnnotation
        id='rocketseat'
        coordinate={[-40.2996606, -20.3540692]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Rocketseat House' />
      </Mapbox.PointAnnotation>

        <Mapbox.PointAnnotation
        id='rocketseat2'
        coordinate={[-40.2992553, -20.3555145]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Rocketseat House' />
      </Mapbox.PointAnnotation>
      </View>
    )
  }

    _renderItem ({item, index}) {
        return (
            <View key={item.key} style={styles.cardContainer} source={item.image}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    }

  render() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.topoContainer}>
                <Text style={styles.topoTitle}>Pontos de Descarte</Text>
            </View>

            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={16}
                showUserLocation={true}
                centerCoordinate={[-40.2996606, -20.3540692]}
                style={styles.container}>

                {this.renderAnnotations()}
            </Mapbox.MapView>

            <Carousel
                data={locations}
                layout={'default'}
                loop={true}
                renderItem={this._renderItem}
                sliderWidth={metrics.screenWidth}
                itemWidth={metrics.screenWidth - 90}
                slideStyle={{justifyContent: 'center'}}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topoContainer: {
    ...general.topoContainer,
    backgroundColor: colors.white,
    marginTop: 0,
    paddingTop: (Platform.OS === 'ios') ? 24 : 0,
  },
  topoTitle: {
    ...general.title,
    ...general.topoTitle,
    color: colors.text,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.main,
    transform: [{ scale: 0.8 }],
  }
});
