import { StackNavigator, createDrawerNavigator } from 'react-navigation';

import Home from 'pages/home';
import Produtos from 'pages/products';
import Pontos from 'pages/points';
import Sobre from 'pages/Home';

const Routes = StackNavigator ({
    Home: {
        screen: createDrawerNavigator({
            Home: { screen: Home },
            Produtos: { screen: Produtos },
            Pontos: { screen: Pontos },
            Sobre: { screen: Sobre }
        })
    },
    initialRouteName: "Home",
});

export default Routes;