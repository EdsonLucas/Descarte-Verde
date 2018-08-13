import React, {Component} from 'react';
import createNavigator from 'routes';
import 'config';
import { AsyncStorage, YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends Component {

  state = {
    checkUse: false,
    isFirstUse: true,
  }

  async componentDidMount() {
    const firstUse = await AsyncStorage.getItem('@DescarteVerde:firstUse');

    this.appLoaded(firstUse);
  }

  appLoaded = (firstUse) => {
    this.setState({
      checkUse: true,
      isFirstUse: !!firstUse
    })
  }

  render() {
    if(!this.state.checkUse) return false;

    const Routes = createNavigator(this.state.isFirstUse);

    return <Routes />;
  }
}
