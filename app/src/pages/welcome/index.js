import React, { Component } from 'react';
import { View, Text, ImageBackground, StatusBar, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import ResponsiveImage from 'react-native-responsive-image';
import styles from './styles';

const slides = [
  {
    key: '1',
    title: '\n A revolução \n de verdade \n começa \n agora',
    subtitle: 'Conheça o Descarte Verde',
    text: '\n Encontre com facilidade os pontos de \n reciclagem mais próximos a você!',
    remote: require('images/banner.png'),
  },
  {
    key: '2',
    title: '\n Ajude \n o meio \n ambiente a \n prosperar',
    subtitle: 'Faça a diferença!',
    text: '\n Faça a sua parte, zele pela limpeza dos \n espaços públicos por meio de pequenos \n gestos.',
    remote: require('images/banner2.png'),
  },
  {
    key: '3',
    title: '\n Faça\n parte dessa\n comunidade',
    subtitle: 'A iniciativa vem de você!',
    text: '\n Você pode salvar o planeta. \n E queremos te ajudar nessa conquista.',
    remote: require('images/banner3.png'),
  },
];

export default class Welcome extends Component {
    static navigationOptions = {
      header: null
    };

    state = {
      firstUse: true
    }

    isFirstUser = async (firstUse) => {
      await AsyncStorage.setItem('@DescarteVerde:firstUse', firstUse.toString());
    }

    welcome = async () => {
      await this.setState({ firstUse: false });

      const { firstUse } = this.state;

      await this.isFirstUser(firstUse);

      try {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home' }),
          ],
        });

        this.props.navigation.dispatch(resetAction);
      } catch(err) {
        // erro
      }
    }

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
          source={require('images/logo-white.png')}
          initWidth={251}
          initHeight={49}
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
        onSkip = { this.welcome.bind(this) }
        onDone = { this.welcome.bind(this) }
      />
    );
  }
}
