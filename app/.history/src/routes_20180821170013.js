import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors, metrics } from 'styles';

import Welcome from 'pages/welcome';
import Home from 'pages/home';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/about';

import Map from 'pages/map';

const createNavigator = (isFirstUse = true) =>
  StackNavigator({
    Welcome: { screen: Welcome },
    Home: {
        screen: TabNavigator({
            Home: { screen: Home, navigationOptions: { tabBarLabel: 'Início', } },
            Produtos: { screen: Produtos },
            Pontos: { screen: Pontos },
            Sobre: { screen: Sobre },
        },
          {
            navigationOptions: ({ navigation }) => {
              tabBarOptions: ({focused}) => {
                const { routeName } = navigation.state;
                if (routeName === 'Home') {
                  return { showLabel: false }
                }
                return
              }
            },
            tabBarPosition: 'bottom',
            tabBarOptions: {
                showIcon: true,
                animationEnabled: true,
                upperCaseLabel: false,
                activeTintColor: colors.main2,
                inactiveTintColor: colors.regular,
                indicatorStyle: {
                    backgroundColor: '#edeef1',
                },
                labelStyle: {
                    fontSize: 11,
                    marginTop: 0,
                },
                style: {
                    backgroundColor: '#edeef1',
                    height: (Platform.OS === 'ios') ? 48 : 49,
                },
            },
        }),
    },
    Map: { screen: Map },
    }, {
      initialRouteName: isFirstUse ? "Welcome" : "Home",
  });

export default createNavigator;