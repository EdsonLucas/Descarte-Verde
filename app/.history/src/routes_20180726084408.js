import { StackNavigator, TabNavigator } from 'react-navigation';
import { colors } from 'styles';

import Home from 'pages/home';
import Welcome from 'pages/welcome';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/about';

const Routes = StackNavigator({
    Welcome: { screen: Welcome },
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
                showLabel: true,
                activeTintColor: colors.dark,
                inactiveTintColor: colors.darkTransparent,
            }
        }),
    },
    initialRouteName: "Home",
});

export default Routes;