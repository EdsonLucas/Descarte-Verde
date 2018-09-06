import React, { Component } from 'react';
import { View, StatusBar, TouchableOpacity, TouchableHighlight, Text, Platform, Image } from 'react-native';
import Mapbox from '@mapbox/react-native-mapbox-gl';
import { MaterialCommunityIcons, Ionicons } from 'icons';
import Carousel from 'react-native-snap-carousel';
import ResponsiveImage from 'react-native-responsive-image';
import { Popup } from 'react-native-map-link';
import { general, metrics, colors } from 'styles';
import styles from './styles';
import locations from 'assets/api/locations.json';

Mapbox.setAccessToken('pk.eyJ1IjoibWFyZG9jIiwiYSI6ImNqa2dzZGd6ZzUyZmkzcW1sZTFrOW1qb2MifQ.3RxRm6kVGjV7AYTE8iMTSg');

const colorObj = {
    papel: colors.danger,
    plastico: colors.success,
    vidro: colors.primary,
    metal: colors.warning,
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
      return str1.trim().toLowerCase().replace("á", "a");
  };

    componentDidMount() {
    this.getLocation();
  }

  getLocation = async () => {
    try {
      const response = await api.get('/properties', {
        params: {
          latitude: -27.210768,
          longitude: -49.644018,
        },
      });

      this.setState({ locations: response.data });
    } catch (err) {
      console.tron.log(err);
    }
  }

    state = {
      locations: [],
      isVisible: false
    }

    renderAnnotations() {
      return (
        this.state.locations.map(location => (
            <Mapbox.PointAnnotation
                key={location.key}
                id={location.title}
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
                    <ResponsiveImage style={{ resizeMode: 'stretch' }} borderRadius={3} source={ item.image } initWidth={(Platform.OS === 'android') ? 120 : 100} initHeight={210} />
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
                        latitude: -20.3540692,
                        longitude: -40.2996606,
                        title: 'The White House',
                        dialogTitle: 'This is the dialog Title',
                        dialogMessage: 'This is the amazing dialog Message',
                        cancelText: 'This is the cancel button text'
                      }}
                    />

                    <TouchableHighlight underlayColor={colors.primary} style={styles.routeButton} onPress={() => { this.setState({ isVisible: true }) }}>
                        <MaterialCommunityIcons name="directions" size={(Platform.OS === 'ios') ? 20 : 25} color={colors.white} />
                    </TouchableHighlight>
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