import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { Entypo } from 'icons';
import styles from './styles';
import { colors } from 'styles';


const Menu = () => (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#00916a" />
        <View style={styles.topoContainer}>
            <Text style={styles.topoTitle}>Menu</Text>
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

        </View>
    </View>
);

Menu.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Entypo name="menu" size={(Platform.OS === 'ios') ? 22 : 24} color={tintColor} />
}

export default Menu;
