import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, StatusBar } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import AppIntroSlider from 'react-native-app-intro-slider';
import {general, metrics, color} from 'styles';
 
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    paddingHorizontal: metrics.basePadding,
  },

  title: {
    ...general.title,
    fontSize: 45,
    backgroundColor: colors.transparent,
    textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
  },

  subtitle: {
    ...general.title,
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: colors.transparent,
    textAlign: 'left',
    paddingHorizontal: 16,
    marginBottom: metrics.baseMargin,
  },

  text: {
    ...general.text,
    color: 'rgba(255, 255, 255, 0.8)',
    backgroundColor: colors.transparent,
    textAlign: 'left',
  },

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
      source={props.remote}
    >
      <View>
        <StatusBar barStyle="light-content" />
        <ResponsiveImage 
          style={styles.image} 
          source={{ uri: 'https://s3.us-east-2.amazonaws.com/descarte-verde/logo-white.png?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSKAAnH1S2aU3MnCZFnoY6yURzL5OM6D33ke5LRFa2J7AsP6zgVH65G89zh%2BemA9J73e14Cu6%2B%2FNDSE1t1UZsqQpnLlcvZktLSuqT%2BOaufKGwJM8YDmzB%2BTHzTBnnVXfdbeDghmNB6f%2FvJEB9Lt4VyZyA5O1qIH6mTWMoDCveEOtDsIrsCGlit%2BYE6aSbkzDmdtBA9Iz1jW%2FGADxQLRRZi28uJtBHI1XexqEKOhCap4YPcfbkLMn4onL1mLIZ3gRiRTdPrKuPjvDfpDD8GPiyh20LggtzHXl90ID04M3KGrIvqdnsBB4oKHjm8VmpxwYxx83pHu4w6HLE12Ur3v1Mttnu38q2wMIdRAAGgw2MDM5NzU4OTg2MzQiDPjvXxOUoPmaj5GL0iq4A3fhvChzbfANqRC276aHKE%2BRpYf8FQalOKR4%2BnsjyguEBBJ8yZKPL2olUA4uy6vl8%2B6py%2B7y%2FpIPLIEZitUvyR1L10SPyTo3PTQt5YGpEYOdVCoA0RejLLDqqufZ4OJuTAg2orVH0oD%2FFvrDCfsqydxhubPa4RfDtMdogngdkZ%2FOF%2BfvjJk4gHcoG01LLrBeQQYT8XK9t7aVqezGECx1fZpJHj7ZT%2BlrEpAyOVUgtefrsXHFLSCFYLzHctAGY0ikWs23SQTgx6RsQRH%2FWpBMz7qffrMprmT8T%2Fq7v5DD43p7Ia0gQN6S2HwN1kvdhH2jQtTc1U%2FI5q9yJAaiLH4kBCY99MrIzT0b%2BpGEh2iQ4%2FF78B6QKSvrVM0E29080kbk74N2jz7usyg66xDWVeE0KwD03ZjbOd8Ce%2BaMkFf8xlmhGEu13VpTZIPdt8A7lKnK5RxI8bY6FMZtOsvz2gwzhvfZY2N66%2B9jGhcUmb77TQ7Jmd9NtjwkYoohM79UcjNF9O5WkhzZo%2BEC1jN%2FG1IsnwvZ22OVgHJiOyk3PCperrbvcdco0zj0y71jX3WbsCrzDEZ9yiVoi%2FPZMKn3kNsF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180803T113240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYZH6E2YFMLOYJGAJ%2F20180803%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=6da0466f949f1c0915e5f53ac4f82a2cb466f81eece20827ab4e8bad384b5b60' }} 
          initWidth={216}
          initHeight={42.5}
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