import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Home from './src/pages/home';
import Produtos from './src/pages/products';
import Pontos from './src/pages/points';
import Sobre from './src/pages/Home';

const Routes = StackNavigator ({
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