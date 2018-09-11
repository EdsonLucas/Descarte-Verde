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
            <Text style={styles.topoTitle}>Configurações</Text>
        </View>

        <View style={styles.subContainer}>
          <View style={styles.imageContainer}>
              <View style={styles.imageSubContainer}>
                  <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/logo.png')} initWidth={283} initHeight={55} />
              </View>
          </View>

          <View style={styles.hr}></View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="menu" size={(Platform.OS === 'ios') ? 22 : 24} color={colors.main2} />
            </View>
            <Text>Avaliar o app</Text>

            <TouchableOpacity style={styles.button} onPress={ () => this.props.navigation.navigate('Map', { 'file': 'materialLocations' }) }>
                <ResponsiveImage style={{resizeMode: 'stretch'}} source={require('images/plastic.png')} initWidth={40} initHeight={40} />
                <Text style={styles.buttonText}>Avaliar o app</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="menu" size={(Platform.OS === 'ios') ? 22 : 24} color={colors.main2} />
            </View>
            <Text>Política de Privacidade</Text>
          </View>

          <View style={styles.listContainer}>
            <View style={styles.iconContainer}>
              <Entypo name="menu" size={(Platform.OS === 'ios') ? 22 : 24} color={colors.main2} />
            </View>
            <Text>Sobre o Descarte Verde</Text>
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
