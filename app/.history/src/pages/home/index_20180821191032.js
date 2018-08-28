import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Platform, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ResponsiveImage from 'react-native-responsive-image';
import { Foundation } from 'icons';
import { metrics, colors } from 'styles';
import styles from './styles';

class Home extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Foundation name="home" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
    };

    render() {
        return (
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />

              <ImageBackground style={styles.imageContainer} source={require('images/home.png')}>
                <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/logo.png')} initWidth={321} initHeight={63} />

                <Text style={styles.title}>Encontre os pontos de reciclagem mais próximos a você!</Text>
              </ImageBackground>

              <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.form}>
                <Text style={styles.text}>
                    Escolha o material que deseja descartar
                </Text>

                {/* <View style={styles.centerForm}>
                  <ImageBackground style={[styles.imageBackground, {width: metrics.screenWidth / 1.14}]} source={require('images/plastico.jpg')}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map') }>
                          <Text style={styles.buttonText}>Plástico</Text>
                      </TouchableOpacity>
                  </ImageBackground>
                </View> */}

                <View style={styles.subForm}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map') }>
                          <ResponsiveImage source={require('images/icon-papel.png')} initWidth={60} initHeight={60} />
                          <Text style={styles.buttonText}>Papel</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map') }>
                          <ResponsiveImage source={require('images/icon-plastico.png')} initWidth={60} initHeight={60} />
                          <Text style={styles.buttonText}>Plástico</Text>
                      </TouchableOpacity>
                </View>

                <View style={styles.subForm}>
                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map') }>
                          <ResponsiveImage source={require('images/icon-vidro.png')} initWidth={60} initHeight={60} />
                          <Text style={styles.buttonText}>Vidro</Text>
                      </TouchableOpacity>

                      <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map') }>
                          <ResponsiveImage source={require('images/icon-metal.png')} initWidth={60} initHeight={60} />
                          <Text style={styles.buttonText}>Metal</Text>
                      </TouchableOpacity>
                </View>

              </LinearGradient>
            </View>
        )
    }
};

export default Home;
