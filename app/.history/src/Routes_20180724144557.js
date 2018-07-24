import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './home/Index';
import Produtos from './products/Index';
import Pontos from './points/Index';
import Sobre from './about/Index';

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