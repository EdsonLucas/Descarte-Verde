import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, StatusBar } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

 
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  image: {
    width: 216,
    height: 45,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'left',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 45,
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
  },
    subtitle: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: 'transparent',
    textAlign: 'left',
    paddingHorizontal: 16,
    marginBottom: 10,
    
  },
  button: {
    backgroundColor: 'red',
  }
});
 
const slides = [
  {
    key: 'somethun',
    title: '\n A revolução \n de verdade \n começa \n agora',
    subtitle: 'Conheça o Descarte Verde',
    text: '\n Ao ativar sua conta, você aceita \n os termos e condições',
    icon: 'ios-images-outline',
    colors: ['#dff9b8', '#9decaa', '#00c99d'],
    remote: require('images/banner.png'),
  },
  {
    key: 'somethun1',
    title: '\n A revolução \n de verdade \n começa \n agora',
    subtitle: 'Conheça o Descarte Verde',
    text: '\n Ao ativar sua conta, você aceita \n os termos e condições',
    icon: 'ios-options-outline',
    colors: ['#A3A1FF', '#3A3897'],
    remote: require('images/banner.png'),
  },
  {
    key: 'somethun2',
    title: '\n A revolução \n de verdade \n começa \n agora',
    subtitle: 'Conheça o Descarte Verde',
    text: '\n Ao ativar sua conta, você aceita \n os termos e condições',
    icon: 'ios-beer-outline',
    colors: ['#29ABE2', '#4F00BC'],
    remote: require('images/banner4.png'),
  },
  {
    key: 'somethun3',
    title: '\n A revolução \n de verdade \n começa \n agora',
    subtitle: 'Conheça o Descarte Verde',
    text: '\n Ao ativar sua conta, você aceita \n os termos e condições',
    icon: 'ios-beer-outline',
    colors: ['#29ABE2', '#4F00BC'],
    remote: require('images/banner4.png'),
  },
];
 
export default class Welcome extends Component {
    static navigationOptions = {
      header: null
    };

  _renderItem = props => (
    <ImageBackground
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      //  colors={props.colors}
      //  start={{x: 0, y: .1}} end={{x: .1, y: 1}}
      source={props.remote}
    >
      <View>
        <StatusBar barStyle="light-content" />
        <Image 
          style={styles.image} 
          source={{uri: 'http://descarteverde.ml/assets/img/logo-white.png'}} 
          />
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </ImageBackground>
  );
 
  render() {
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this._renderItem}
        showSkipButton
        skipLabel = 'Pular'
        nextLabel = 'Avançar'
        doneLabel = 'Vamos lá!'
        onSkip = { () =>  this.props.navigation.navigate('Home') }
        onDone = { () =>  this.props.navigation.navigate('Home') }
      />
    );
  }
}