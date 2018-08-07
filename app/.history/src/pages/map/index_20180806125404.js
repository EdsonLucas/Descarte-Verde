import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { general, metrics, colors } from 'styles';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

export default class Map extends Component {
    static navigationOptions = {
        header: null,
    };

  renderAnnotations() {
    return (
    <View>
      <Mapbox.PointAnnotation
        key='rocketseat'
        id='rocketseat'
        coordinate={[-40.2996606, -20.3540692]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>

        <MapboxGL.PointAnnotation
        key='rocketseat2'
        id='rocketseat2'
        coordinate={[-40.2992553, -20.3555145]}
      >
        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
        </View>
        <Mapbox.Callout title='Look! An annotation!' />
      </Mapbox.PointAnnotation>
      </View>
    )
  }

  render() {
    return (
      <Mapbox.MapView
        centerCoordinate={[-40.2996606, -20.3540692]}
        style={styles.container}
        showUserLocation
        styleURL={MapboxGL.StyleURL.street}
      >
     <StatusBar barStyle="dark-content" />
     <View style={styles.topoContainer}>
        <Text style={styles.topoTitle}>Pontos de Descarte</Text>
     </View>
      {this.renderAnnotations()}
      </Mapbox.MapView>
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
    paddingTop: 24,
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
    backgroundColor: '#7159C1',
    transform: [{ scale: 0.8 }],
  }
});
