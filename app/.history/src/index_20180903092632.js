import React, {Component} from 'react';
import createNavigator from 'routes';
import 'config';
import Permissions from 'react-native-permissions'
import TimerMixin from 'react-timer-mixin';
import requestPermissions from 'utils/location-service.js';
import { AsyncStorage, YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])

export default class App extends Component {

  state = {
    checkUse: false,
    isFirstUse: true,
  }

  async componentWillMount() {
    requestPermissions();
    Permissions.check('location', { type: 'always' }).then(response => {
      this.setState({ locationPermission: response })
    });
    const intervalId = TimerMixin.setInterval(this.getCurrentPosition, 10000);
    this.setState({ intervalId });

  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
    TimerMixin.componentWillUnmount.call(this);
  }

  getCurrentPosition = async () => {
    const { intervalId } = this.state;
    Permissions.check('location').then((response) => {
      if(response === 'authorized') {
        clearInterval(intervalId);
        this.watchId = navigator.geolocation.watchPosition(
          (position) => {
            AsyncStorage.setItem('@DescarteVerde:coords', JSON.stringify(position.coords));
          }, (error) => {
            if(error.code === 1) console.log('enable gps');
          },
          {
            enableHighAccuacy: false, timeout: 2000, maxiumAge: 0, distanceFilter: 1,
          },
        );
      }
    });
  }

  async componentDidMount() {
    const firstUse = await AsyncStorage.getItem('@DescarteVerde:firstUse');

    this.appLoaded(firstUse);
  }

  appLoaded = (firstUse) => {
    this.setState({
      checkUse: true,
      isFirstUse: !firstUse
    })
  }

  render() {
    if(!this.state.checkUse) return false;

    const Routes = createNavigator(this.state.isFirstUse);

    return <Routes />;
  }
}
