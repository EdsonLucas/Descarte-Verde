import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, Text, Platform, AsyncStorage } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { Ionicons } from 'icons';
import Carousel from 'react-native-snap-carousel';
import ResponsiveImage from 'react-native-responsive-image';
import geolib from 'geolib';
import materialLocations from 'assets/api/materialLocations.json';
import toothpasteLocations from 'assets/api/toothpasteLocations.json';
import { metrics, colors } from 'styles';
import styles from './styles';

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

const places = {
  'materialLocations': materialLocations,
  'toothpasteLocations': toothpasteLocations,
}

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
    await this.getLocation();
    const result = await AsyncStorage.getItem('@DescarteVerde:coords');
    if(result) this.setState({ coords: JSON.parse(result) });
      const simpleData = this.state.locations.reduce((prev, obj) => {
        return Object.assign({}, prev,
          { [obj.key]:  { latitude: obj.latitude, longitude: obj.longitude } }
        );
      }, {});
    const temp = JSON.parse(result);
    const listLocation = geolib.orderByDistance({ latitude: temp.latitude, longitude: temp.longitude}, simpleData);
    this.setState({ listLocation: [...listLocation] });
  }

  async getLocation() {
    const { params } = this.props.navigation.state;

    const file = params.file

    await this.setState({
      locations: places[file].data
    })
  }

    state = {
      locations: [],
      listLocation: [],
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

            <View style={styles.annotationContainer}>
                <View style={styles.annotationFill} />
            </View>
            <Mapbox.Callout title={location.subtitle} />
            </Mapbox.PointAnnotation>
            )
        )
      )
    }


    _renderItem ({item, index}) {
        const result = this.state.locations.find(l => l.key === item.key);
        const distance = geolib.convertUnit('m', item.distance, 2)
        return (
            <View key={result.key} style={styles.cardContainer} >
                <View style={styles.imageContainer}>
                    <ResponsiveImage style={{ resizeMode: 'stretch' }} borderRadius={3} source={ imgPointer[result.image] } initWidth={(Platform.OS === 'android') ? 120 : 100} initHeight={210} />
                </View>
                <View style={styles.subContainer}>
                    <Text style={styles.title}>{result.title}</Text>
                    <Text style={styles.subTitle}>{result.subtitle}</Text>

                    <View style={styles.rowContainer}>
                        {
                            result.description.map(description => (
                                <View key={result.key} style={[styles.descriptionContainer, { backgroundColor: colorObj[this.string_parameterize(description)] } ]}>
                                    <Text style={styles.description}>{description}</Text>
                                </View>
                            ))
                        }
                    </View>
                    <View style={styles.distanceContainer}>

                        <View style={styles.distanceIcon}>
                            <Ionicons name="ios-walk" size={(Platform.OS === 'ios') ? 20 : 23} color={colors.white} />
                        </View>

                        <Text style={styles.distanceTitle}>{distance} metros</Text>
                    </View>
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
                  <TouchableOpacity
                      style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}
                      onPress={() => this.props.navigation.goBack()}
                      >
                      <Ionicons name="ios-arrow-back" size={35} color={colors.text} />
                  </TouchableOpacity>
                <Text style={styles.topoTitle}>Pontos de Descarte</Text>
            </View>

            <Mapbox.MapView
            styleURL={Mapbox.StyleURL.Street}
            animated={true}
            zoomLevel={16}
            zoomEnabled={true}
            scrollEnabled={true}
            showUserLocation={true}
            attributionEnabled={false}
            logoEnabled={false}
            centerCoordinate={[parseFloat(coords.longitude), parseFloat(coords.latitude)]}
            style={styles.mapContainer}
            ref={(c) => this._map = c}
            >

                {this.renderAnnotations()}

            </Mapbox.MapView>

            <Carousel
            data={this.state.listLocation}
            layout={'default'}
            renderItem={this._renderItem}
            sliderWidth={metrics.screenWidth}
            itemWidth={metrics.screenWidth - 90}
            slideStyle={styles.placeContainer}
            onSnapToItem={(index) => {
                const { latitude, longitude } = this.state.listLocation[index];

                this._map.flyTo([longitude, latitude], 1500);

                }}
            />
      </View>
    );
  }
}
