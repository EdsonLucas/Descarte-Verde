import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, Text, Platform, Image } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MaterialCommunityIcons } from 'icons';
import Carousel from 'react-native-snap-carousel';
import ResponsiveImage from 'react-native-responsive-image';
import { general, metrics, colors } from 'styles';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

export default class Map extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
    }

    state = {
      locations: [
        {
          key: '1',
          title: 'PEV',
          description: ['metal', 'plastico', 'papel', 'vidro'],
          image: require('images/pev.jpg'),
          latitude: -20.3540692,
          longitude: -40.2996606,
        },
        {
          key: '2',
          title: 'Comércios',
          description: 'teste',
          image: require('images/cooperativa.jpg'),
          latitude: -20.3555145,
          longitude: -40.2992553,
        },
        {
          key: '3',
          title: 'Próximo a Netsimples',
          description: 'teste',
          image: require('images/comercio.jpg'),
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
                <Image source={require('images/marker.png')} style={{ flex: 1, resizeMode: 'contain', width: 30, height: 30 }}
                />
            </Mapbox.PointAnnotation>
            )
        )
      )
    }


    _renderItem ({item, index}) {
        return (
            <View key={item.key} style={styles.cardContainer} >
                <View style={styles.imageContainer}>
                    <ResponsiveImage style={{ resizeMode: 'stretch' }} borderRadius={3} source={ item.image } initWidth={100} initHeight={200} />
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    {
                        this.state.locations.map(location => (
                            location.description.map(description => (
                                <View key={location.key} style={styles.descriptionContainer}>
                                    <Text style={styles.description}>{location.description}</Text>
                                </View>
                            ))
                        ))
                    }
                </View>
            </View>
        );
    }

  render() {
    //[-40.2996606, -20.3540692]
    const { latitude, longitude } = this.state.locations[0];

    return (
        <View style={styles.container}>
            <StatusBar barStyle={(Platform.OS === 'ios') ? 'dark-content' : 'light-content'} />
            <View style={styles.topoContainer}>
                {
                    Platform.OS === 'ios' &&
                    <TouchableOpacity
                        disabled={!this.state.canGoBack}
                        onPress={this.onBack.bind(this)}
                        >
                        <Text style={styles.topbarText}>Go Back</Text>
                    </TouchableOpacity>
                }
                <Text style={styles.topoTitle}>Pontos de Descarte</Text>
            </View>

            <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            zoomLevel={16}
            zoomEnabled={true}
            scrollEnabled={false}
            showUserLocation={true}
            attributionEnabled={(Platform.OS === 'ios') ? true : false}
            logoEnabled={false}
            centerCoordinate={[longitude, latitude]}
            style={styles.mapContainer}
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
            itemWidth={metrics.screenWidth - 90}
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

  mapContainer: {
    flex: 1,
    position: 'absolute',
    top: (Platform.OS === 'android') ? 65 : 85,
    left: 0,
    right: 0,
    bottom: 0,
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
    marginTop: metrics.baseMargin * 33,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: metrics.basePadding,
  },

  cardContainer: {
      flexDirection: 'row',
      width: metrics.screenWidth - 130,
      backgroundColor: '#FFF',
      borderRadius: metrics.baseRadius,
      marginVertical: metrics.baseMargin * 5,
      padding: 0,
      shadowOffset:{ width: 5, height: 5 },
      shadowColor: colors.black,
      shadowOpacity: 0.5,
      elevation: 5,
  },

  imageContainer: {
      justifyContent: 'center',
      borderRadius: metrics.baseRadius,
      marginLeft: -20,
  },

  subContainer: {
      flex: 1,
      alignItems: 'flex-start',
      padding: metrics.basePadding,
  },

  title: {
    ...general.title,
      paddingBottom: metrics.basePadding / 10,
  },

  descriptionContainer: {
    backgroundColor: colors.main,
    paddingVertical: metrics.basePadding / 7,
    paddingHorizontal: metrics.basePadding / 4,
    borderRadius: metrics.baseRadius * 3,
  },

  description: {
    ...general.text,
    color: colors.white,
  }
});
