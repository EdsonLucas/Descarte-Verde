import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Platform } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import Carousel from 'react-native-snap-carousel';
import { general, metrics, colors } from 'styles';

MapboxGL.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

export default class Map extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
      locations: [
        {
          key: '1',
          title: 'PEV - (Ponto de Entrega Voluntária)',
          description: 'São postos locais que recebem materiais recicláveis para serem enviados à reciclagem. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
          latitude: -20.3540692,
          longitude: -40.2996606,
        },
        {
          key: '2',
          title: 'Comércios',
          description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas.',
          latitude: -20.3555145,
          longitude: -40.2992553,
        },
      ]
    }

    renderAnnotations() {
      return (
        this.state.locations.map(location => (
            <MapboxGL.PointAnnotation
                key={location.key}
                id={location.title}
                coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
            >
                <View style={styles.annotationContainer}>
                    <View style={styles.annotationFill} />
                </View>

                <MapboxGL.Callout title={location.title} />
            </MapboxGL.PointAnnotation>
            )
        )
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

            <MapboxGL.MapView
                styleURL={MapboxGL.StyleURL.Street}
                zoomLevel={16}
                rotateEnabled={false}
                showUserLocation={true}
                centerCoordinate={[-40.2996606, -20.3540692]}
                style={styles.container}>

                {this.renderAnnotations()}
            </MapboxGL.MapView>

            <Carousel
                data={this.state.locations}
                layout={'default'}
                loop={true}
                renderItem={this._renderItem}
                sliderWidth={metrics.screenWidth}
                itemWidth={metrics.screenWidth - 90}
                slideStyle={[styles.cardContainer, {justifyContent: 'center'}]}
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
  },

  cardContainer: {
    padding: 0,
    justifyContent: 'flex-end',
    marginHorizontal: metrics.baseMargin / 2,
    marginBottom: metrics.baseMargin,

    shadowOffset:{ width: 5, height: 5 },
    shadowColor: colors.black,
    shadowOpacity: 0.5,

    elevation: 5,
  },
});
