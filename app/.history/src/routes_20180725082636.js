import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from 'pages/home';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/about';

const Routes = StackNavigator({
    Welcome: {
        screen: Welcome
    },
    Home: {
        screen: DrawerNavigator({
            Home: { screen: Home },
            Produtos: { screen: Produtos },
            Pontos: { screen: Pontos },
            Sobre: { screen: Sobre }
        })
    },
    initialRouteName: "Welcome",
});

export default Routes;