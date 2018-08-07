import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors, metrics } from 'styles';

import Welcome from 'pages/welcome';
import Home from 'pages/home';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/about';

const Routes = StackNavigator({
    //Welcome: { screen: Welcome },
    Produtos: { screen: Produtos },
    Home: {
        screen: TabNavigator({
            Home: { screen: Home },
            Produtos: { screen: Produtos },
            Pontos: { screen: Pontos },
            Sobre: { screen: Sobre }
        }, {
            tabBarPosition: 'bottom',
            tabBarOptions: {
                showIcon: true,
                animationEnabled: true,
                showLabel: (Platform.OS !== 'android'),
                activeTintColor: colors.dark,
                inactiveTintColor: colors.darkTransparent,
                indicatorStyle: {
                        backgroundColor: '#edeef1',
                },
                labelStyle: {
                    fontSize: 11,
                },
                style: {
                    backgroundColor: '#edeef1',
                    height: (Platform.OS === 'ios') ? 48 : 50,
                },
            },
        }),
    },
    initialRouteName: "Home",
});

export default Routes;