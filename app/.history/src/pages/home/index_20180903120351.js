import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ResponsiveImage from 'react-native-responsive-image';
import { MaterialCommunityIcons } from 'icons';
import { metrics } from 'styles';
import requestPermissions from 'utils/location-service.js';
import styles from './styles';

class Home extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="home-outline" size={(Platform.OS === 'ios') ? 22 : 24} color={tintColor} />
    };

    async componentDidMount() {
      console.error(this.props.navigation)
      await requestPermissions(this.props.navigation);
    }

    render() {
        return (
            <View style={styles.container}>
              <StatusBar barStyle="light-content" backgroundColor="#00916a" />

              <View style={styles.imageContainer}>
                <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/logo-white.png')} initWidth={321} initHeight={63} />

                <Text style={styles.title}>Encontre os pontos de reciclagem mais próximos a você!</Text>
              </View>

              <View style={styles.form}>
                <Text style={styles.text}>
                    Escolha o material que deseja descartar
                </Text>

                <View style={styles.centerForm}>
                  <ImageBackground style={[styles.imageBackground, {width: (Platform.OS === 'android') ? metrics.screenWidth / 1.13 : metrics.screenWidth / 1.14}]} source={require('images/plastico.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/plastic.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Plástico</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.subForm}>
                  <ImageBackground style={styles.imageBackground} source={require('images/papel.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/paper.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Papel</Text>
                      </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground style={styles.imageBackground} source={require('images/tubo.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'toothpasteLocations' }) }>
                      <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/toothpaste.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Tubo de Creme Dental</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.subForm}>
                  <ImageBackground style={styles.imageBackground} source={require('images/vidro.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/glass.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Vidro</Text>
                      </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground style={styles.imageBackground} source={require('images/metal.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/soda.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Metal</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

              </View>
            </View>
        )
    }
};

export default Home;
