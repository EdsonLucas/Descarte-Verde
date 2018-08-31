import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ResponsiveImage from 'react-native-responsive-image';
import { MaterialCommunityIcons } from 'icons';
import { metrics } from 'styles';
import styles from './styles';

class Home extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="home-outline" size={(Platform.OS === 'ios') ? 18 : 24} color={tintColor} />
    };

    render() {
        return (
            <View style={styles.container}>
              <StatusBar barStyle="dark-content" />

              <View style={styles.imageContainer}>
                <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/logo-white.png')} initWidth={321} initHeight={63} />

                <Text style={styles.title}>Encontre os pontos de reciclagem mais próximos a você!</Text>
              </View>

              <View style={styles.form}>
                <Text style={styles.text}>
                    Escolha o material que deseja descartar
                </Text>

                <View style={styles.centerForm}>
                  <ImageBackground style={[styles.imageBackground, {width: metrics.screenWidth / 1.13}]} source={require('images/plastico2.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/plastic.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Plástico</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.subForm}>
                  <ImageBackground style={styles.imageBackground} source={require('images/papel3.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/paper.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Papel</Text>
                      </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground style={styles.imageBackground} source={require('images/tubo3.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'toothpasteLocations' }) }>
                      <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/toothpaste.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Tubo de Creme Dental</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.subForm}>
                  <ImageBackground style={styles.imageBackground} source={require('images/vidro3.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/glass.png')} initWidth={40} initHeight={40} />
                          <Text style={styles.buttonText}>Vidro</Text>
                      </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground style={styles.imageBackground} source={require('images/metal3.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
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
