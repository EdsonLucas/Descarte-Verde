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
            Home: { screen: Home },
            Produtos: {
                    screen: Produto, stitle: 'Agenda' },
            Pontos: { screen: Pontos },
            Sobre: { screen: Sobre }
        }, {
            tabBarPosition: 'bottom',
            tabBarOptions: {
                showIcon: true,
                animationEnabled: true,
                showLabel: true,
                activeTintColor: colors.main2,
                inactiveTintColor: colors.darkTransparent,
                indicatorStyle: {
                        backgroundColor: colors.whiteTransparent,
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