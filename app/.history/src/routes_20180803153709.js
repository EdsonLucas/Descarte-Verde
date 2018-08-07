import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors, metrics } from 'styles';

import Welcome from 'pages/welcome';
import Home from 'pages/home';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/about';

const Routes = StackNavigator({
    // Welcome: { screen: Welcome },
    //Produtos: { screen: Produtos },
    Home: {
        screen: TabNavigator({
            Home: { screen: Home, navigationOptions: { tabBarLabel: 'Início', } },
            Produtos: { screen: Produtos, navigationOptions: { tabBarLabel: 'Materiais descarte', } },
            Pontos: {
                      screen: Pontos,
                      navigationOptions: {
                          tabBarLabel: 'Pontos descarte',
                      }
                    },
            Sobre: {
                      screen: Sobre,
                      navigationOptions: {
                          tabBarLabel: 'Pontos descarte',
                      }
                   },
        }, {
            tabBarPosition: 'bottom',
            tabBarOptions: {
                showIcon: true,
                animationEnabled: true,
                showLabel: true,
                upperCaseLabel: false,
                activeTintColor: colors.main2,
                inactiveTintColor: colors.regular,
                indicatorStyle: {
                        backgroundColor: colors.lighter,
                },
                labelStyle: {
                    fontSize: 11,
                    marginTop: 0,
                },
                style: {
                    backgroundColor: colors.lighter,
                    height: (Platform.OS === 'ios') ? 48 : 49,
                },
            },
        }),
    },
    initialRouteName: "Home",
});

export default Routes;
