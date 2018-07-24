import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from 'home/Index';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/Home';

const Routes = StackNavigator({
    Home: {
        screen: DrawerNavigator({
            Home: { screen: Home },
            Produtos: { screen: Produtos },
            Pontos: { screen: Pontos },
            Sobre: { screen: Sobre }
        })
    },
    initialRouteName: "Home",
});

export default Routes;