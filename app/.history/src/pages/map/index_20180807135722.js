import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Platform, ScrollView } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
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
      ]
    }

    _mapReady = () => {
        this.state.locations[0].mark.showCallout();
    };

    renderAnnotations() {
      return (
        this.state.locations.map(location => (
            <MapboxGL.PointAnnotation
                key={location.key}
                id={location.title}
                ref={mark => locations.mark = mark}
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

  render() {

    const { latitude, longitude } = this.state.locations[0];

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
                style={styles.container}
                ref={map => this.mapView = map}
                >

                {this.renderAnnotations()}
            </MapboxGL.MapView>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                style={styles.placeContainer}
                onMomentumScrollEnd={(e) => {
                    const place = (e.nativeEvent.contentOffset.x > 0)
                        ? e.nativeEvent.contentOffset.x / metrics.screenWidth
                        : 0;

                    const { latitude, longitude, mark } = this.state.locations[place];

                    this.mapView.animateToCoordinate({
                        latitude,
                        longitude
                    }, 500);

                    setTimeout(() => {
                        mark.showCallout();
                    }, 500)
                }}
            >
            {
              this.state.locations.map(location => (
                  <View key={location.key} style={styles.cardContainer} source={location.image}>
                      <View style={styles.subContainer}>
                          <Text style={styles.title}>{location.title}</Text>
                          <Text style={styles.description}>{location.description}</Text>
                      </View>
                  </View>
                )
              )
            }
            </ScrollView>
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
    width: metrics.screenWidth,
    maxHeight: 150,
  },

  cardContainer: {
      width: metrics.screenWidth - 40,
      maxHeight: 200,
      backgroundColor: '#FFF',
      marginHorizontal: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      padding: 20,
  },
});
