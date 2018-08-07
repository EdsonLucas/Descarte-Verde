import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Platform, ScrollView, Dimensions } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import Carousel from 'react-native-snap-carousel';
import { general, metrics, colors } from 'styles';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

export default class Map extends Component {
    static navigationOptions = {
        header: null,
    };

    state = {
      locations: [
        {
          key: '1',
          title: 'PEV - (Ponto de Entrega Voluntária)',
          description: 'teste',
          latitude: -20.3540692,
          longitude: -40.2996606,
        },
        {
          key: '2',
          title: 'Comércios',
          description: 'teste',
          latitude: -20.3555145,
          longitude: -40.2992553,
        },
        {
          key: '3',
          title: 'Próximo a Netsimples',
          description: 'teste',
          latitude: -20.334076,
          longitude: -40.295269,
        },
      ]
    }

    renderAnnotations() {
      return (
        this.state.locations.map(location => (
            <Mapbox.PointAnnotation
                key={location.key}
                id={location.title}
                coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
            >
                <View style={styles.annotationContainer}>
                    <View style={styles.annotationFill} />
                </View>

                <Mapbox.Callout title={location.title} />
            </Mapbox.PointAnnotation>
            )
        )
      )
    }


    _renderItem ({item, index}) {
        return (
            <View key={item.key} style={styles.cardContainer}>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
        );
    }

  render() {

    const { latitude, longitude } = this.state.locations[0];

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.topoContainer}>
                <Text style={styles.topoTitle}>Pontos de Descarte</Text>
            </View>

            <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={16}
            zoomEnabled={true}
            scrollEnabled={false}
            showUserLocation={true}
            attributionEnabled={false}
            logoEnabled={false}
            centerCoordinate={[longitude, latitude]}
            style={styles.container}
            ref={(c) => this._map = c}
            >

                {this.renderAnnotations()}

            </Mapbox.MapView>

            <Carousel
            data={this.state.locations}
            layout={'default'}
            loop={true}
            renderItem={this._renderItem}
            sliderWidth={metrics.screenWidth}
            itemWidth={metrics.screenWidth}
            slideStyle={styles.placeContainer}
            onSnapToItem={(index) => {
                const { latitude, longitude } = this.state.locations[index];

                this._map.flyTo([longitude, latitude], 1500);

                }}
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

  placeContainer: {
    flex: 1,
    width: metrics.screenWidth
    paddingHorizontal: metrics.basePadding,
    backgroundColor: 'blue',
    maxHeight: 150,
  },

  cardContainer: {
      width: metrics.screenWidth - 40,
      maxHeight: 200,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 20,
  },
});
