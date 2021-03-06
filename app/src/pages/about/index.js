import React, { Component } from 'react';
import { View, Text, Platform, StatusBar, TouchableOpacity } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Ionicons } from 'icons';
import styles from './styles';
import { colors } from 'styles';


class Sobre extends Component {
   static navigationOptions = {
    header: null,
    swipeEnabled: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#00916a" />
              <View style={styles.topoContainer}>
                    <TouchableOpacity
                        style={{flex: 0.3, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => this.props.navigation.goBack()}
                        >
                        <Ionicons name="ios-arrow-back" size={35} color={colors.white} />
                    </TouchableOpacity>
                  <Text style={[styles.topoTitle, { marginRight: 60}]}>Sobre</Text>
              </View>

          <View style={styles.subContainer}>
            <View style={styles.imageContainer}>
                <View style={styles.imageSubContainer}>
                    <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/logo-white.png')} initWidth={281} initHeight={55} />
                </View>
                <View style={[styles.imageSubContainer, { borderLeftWidth: 1, borderLeftColor: colors.white }]}>
                    <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/green-idea-white.png')} initWidth={50} initHeight={75} />
                </View>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>O Descarte Verde</Text>
                    <Text style={styles.description}>
                    O Descarte Verde é um serviço oferecido pelo Grupo Green Idea. Ele te auxilia na busca pelos pontos de reciclagem mais próximos a você! É uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.
                    </Text>
                </View>
            </View>

          <View style={styles.cardContainer}>
                <Text style={[styles.description, styles.textContainer]}>
                O grupo Green Idea colaborou com o grupo Arquitetiquímicos em sua coleta de tubos de creme dental, trazendo ao Inovaweek mais integração entre os trabalhos desenvolvidos e ajudando ainda mais a natureza na coleta de uma material para o qual ainda não há descarte definitivo no Brasil.
                </Text>
            </View>

            <View style={styles.cardContainer}>
                <Text style={[styles.description, styles.textContainer]}>
                O Descarte Verde foi desenvolvido por alunos da UVV(Universidade de Vila Velha), com integrantes de cursos de Sistemas de Informação, Marketing, Engenharia e Psicologia.
                </Text>
            </View>
          </View>
      </View>
    )
  }
}

export default Sobre;
