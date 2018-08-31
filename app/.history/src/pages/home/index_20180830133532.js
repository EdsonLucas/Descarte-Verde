import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ResponsiveImage from 'react-native-responsive-image';
import { MaterialCommunityIcons, Foundation, Feather } from 'icons';
import { metrics } from 'styles';
import styles from './styles';

class Home extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Feather name="home" size={(Platform.OS === 'ios') ? 18 : 24} color={tintColor} />
    };

    render() {
        return (
            <View style={styles.container}>
              <StatusBar barStyle="dark-content" />

              <View style={styles.imageContainer}>
                <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/logo.png')} initWidth={321} initHeight={63} />

                <Text style={styles.title}>Encontre os pontos de reciclagem mais próximos a você!</Text>
              </View>

              <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.form}>
                <Text style={styles.text}>
                    Escolha o material que deseja descartar
                </Text>

                <View style={styles.centerForm}>
                  <ImageBackground style={[styles.imageBackground, {width: metrics.screenWidth / 1.14}]} source={require('images/plastico.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <Text style={styles.buttonText}>Plástico</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.subForm}>
                  <ImageBackground style={styles.imageBackground} source={require('images/papel.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <Text style={styles.buttonText}>Papel</Text>
                      </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground style={styles.imageBackground} source={require('images/tubo.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'toothpasteLocations' }) }>
                          <Text style={styles.buttonText}>Tubo de Creme Dental</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

                <View style={styles.subForm}>
                  <ImageBackground style={styles.imageBackground} source={require('images/vidro.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <Text style={styles.buttonText}>Vidro</Text>
                      </TouchableOpacity>
                  </ImageBackground>

                  <ImageBackground style={styles.imageBackground} source={require('images/metal.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                          <Text style={styles.buttonText}>Metal</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View>

              </LinearGradient>
            </View>
        )
    }
};

export default Home;
