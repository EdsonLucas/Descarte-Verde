import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { general, metrics, colors } from 'styles';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

export default class Map extends Component<{}> {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
        <View>
            <StatusBar barStyle="dark-content" />
            <View style={styles.topoContainer}>
                <Text style={styles.topoTitle}>Pontos de Descarte</Text>
            </View>

            <Mapbox.MapView
                styleURL={Mapbox.StyleURL.Street}
                zoomLevel={15}
                centerCoordinate={[-40.2996606, -20.3540692]}
                style={styles.container}>
            </Mapbox.MapView>
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
