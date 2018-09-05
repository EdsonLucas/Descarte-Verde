import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { MaterialCommunityIcons, Ionicons } from 'icons';
import styles from './styles';
import { general, colors, metrics } from 'styles';


const Sobre = () => (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00916a" />
        <View style={styles.topoContainer}>
            <Text style={styles.topoTitle}>Sobre</Text>
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
                      O Descarte Verde é um serviço oferecido pelo Grupo Green Idea. O Descarte verde te auxilia na busca pelos pontos de reciclagem mais próximos a você! O Descarte Verde é uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.
                  </Text>
              </View>
          </View>

          <View style={styles.cardContainer}>
              <Text style={[styles.description, styles.textContainer]}>
                  O Descarte Verde foi desenvolvido por alunos da UVV(Universidade de Vila Velha), com integrantes de cursos de Sistemas de Informação, Marketing, Engenharia e Psicologia.
              </Text>
          </View>
        </View>
    </View>
);

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="menu" size={(Platform.OS === 'ios') ? 22 : 24} color={tintColor} />
}

export default Sobre;
