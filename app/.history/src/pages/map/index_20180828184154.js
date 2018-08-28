import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, TouchableHighlight, Text, Platform, Image, AsyncStorage } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MaterialCommunityIcons, Ionicons } from 'icons';
import Carousel from 'react-native-snap-carousel';
import ResponsiveImage from 'react-native-responsive-image';
import { Popup } from 'react-native-map-link';
import { general, metrics, colors } from 'styles';
import styles from './styles';
import locations from 'assets/api/locations.json';
import geolib from 'geolib';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

const colorObj = {
    papel: colors.danger,
    plastico: colors.success,
    vidro: colors.primary,
    metal: colors.warning,
    tubodecremedental: '#bf9957',
};

const imgPointer = {
    pev: require('images/pev.jpg'),
};

export default class Map extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);
        this._renderItem = this._renderItem.bind(this);
    }

    string_parameterize = function (str1) {
      return str1.trim().toLowerCase().replace(/\s/g,'').replace("á", "a");
  };

  async componentDidMount() {
    this.getLocation();
    const result = await AsyncStorage.getItem('@DescarteVerde:coords');
    if(result) this.setState({ coords: JSON.parse(result) });
      const simpleData = locations.data.reduce((prev, obj) => {
        return Object.assign( prev,
          { latitude: obj.latitude, longitude: obj.longitude }
        );
      }, {});
    console.error(simpleData);
    const temp = JSON.parse(result);
    const firstItem = geolib.orderByDistance({ latitude: temp.latitude, longitude: temp.longitude}, simpleData);
    this.setState({ firstItem: parseInt(firstItem.key) });
    //console.error(firstItem);
  }

  getLocation = () => {
    this.setState({
      locations: locations.data
    })
  }

  // async onUserLocationUpdate(location) {
  //   await this.setState({ coords: location.coords });
  //   this.centerMap();
  // }

  // centerMap() {
  //   const { coords } = this.state;
  //   if (coords) {
  //     this._map.setCamera({
  //       centerCoordinate: [coords.longitude, coords.latitude],
  //     });
  //   }
  // }

    state = {
      locations: [],
      isVisible: false,
      firstItem: 0,
      coords: {
        latitude: -20.3543106,
        longitude: -40.2992636,
      }
    }

    renderAnnotations() {
      return (
        this.state.locations.map(location => (
            <Mapbox.PointAnnotation
                key={location.key}
                id={location.key}
                coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
            >
                {/* <Image source={require('images/marker.png')} style={{ flex: 1, resizeMode: 'contain', width: 30, height: 30 }}
                /> */}
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
            <View key={item.key} style={styles.cardContainer} >
                <View style={styles.imageContainer}>
                    <ResponsiveImage style={{ resizeMode: 'stretch' }} borderRadius={3} source={ imgPointer[item.image] } initWidth={(Platform.OS === 'android') ? 120 : 100} initHeight={210} />
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subtitle}</Text>

                    <View style={styles.rowContainer}>
                        {
                            item.description.map(description => (
                                <View key={item.key} style={[styles.descriptionContainer, { backgroundColor: colorObj[this.string_parameterize(description)] } ]}>
                                    <Text style={styles.description}>{description}</Text>
                                </View>
                            ))
                        }
                    </View>
                </View>

                <View style={styles.routeContainer}>
                  <Popup
                      isVisible={this.state.isVisible}
                      onCancelPressed={() => this.setState({ isVisible: false })}
                      onAppPressed={() => this.setState({ isVisible: false })}
                      onBackButtonPressed={() => this.setState({ isVisible: false })}
                      options={{
                        latitude: this.state.locations.latitude,
                        longitude: this.state.locations.longitude,
                        title: this.state.locations.title,
                        dialogTitle: 'This is the dialog Title',
                        dialogMessage: 'This is the amazing dialog Message',
                        cancelText: 'This is the cancel button text'
                      }}
                    />

                    <TouchableHighlight underlayColor={colors.primary} style={styles.routeButton} onPress={() => this.centerMap()}>
                        <MaterialCommunityIcons name="directions" size={(Platform.OS === 'ios') ? 20 : 25} color={colors.white} />
                    </TouchableHighlight>
                </View>
            </View>
        );
    }

  render() {
    const { coords } = this.state;

    return (
        <View style={styles.container}>
            <StatusBar barStyle={(Platform.OS === 'ios') ? 'dark-content' : 'light-content'} />
            <View style={styles.topoContainer}>
                {
                    Platform.OS === 'ios' &&
                    <TouchableOpacity
                        style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <Ionicons name="ios-arrow-back" size={35} color={colors.text} />
                    </TouchableOpacity>
                }
                <Text style={styles.topoTitle}>Pontos de Descarte</Text>
            </View>

            <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            animated={true}
            zoomLevel={16}
            zoomEnabled={true}
            scrollEnabled={true}
            showUserLocation={true}
            attributionEnabled={(Platform.OS === 'ios') ? true : false}
            logoEnabled={false}
            centerCoordinate={[parseFloat(coords.longitude), parseFloat(coords.latitude)]}
            // onUpdateUserLocation={this.onUpdateUserLocation}
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
