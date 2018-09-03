import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import { Alert, Platform } from 'react-native';
import Permissions from 'react-native-permissions';

const checkEnableGps = () => {
  const result = LocationServicesDialogBox.checkLocationServicesIsEnabled({
    message: '<h2>Habiltar GPS?</h2>O Sismages precisa alterar a configuração do dispositivo:' +
      "<br/><br/>Habilite o GPS para continuar a usar o Sismages.<br/><br/><a href='#'>Entenda mais</a>",
    ok: 'SIM',
    cancel: 'NÃO',
    enableHighAccuracy: false, // true => GPS AND NETWORK PROVIDER, false => ONLY GPS PROVIDER
    showDialog: true, // false => Opens the Location access page directly
    openLocationServices: true,
  }).then(() => true).catch(() => false);
  return result;
};

const alertPermission = () => {
  Alert.alert(
    'Sismages - Permissões',
    'Precisamos que aceite as permissões solicitadas para continuar.',
    [
      {
        text: 'OK',
        onPress: () => console.log('Permission denied'),
        style: 'cancel',
      },
      Platform.OS === 'ios' &&
      { text: 'Open Settings', onPress: Permissions.openSettings },
    ],
  );
};


const requestPermissionLocationAndCamera = async () => {
  Permissions.request('location').then((responseLocation) => {
    if (responseLocation !== 'authorized') {
      alertPermission();
    } else {
      Permissions.request('camera').then((responseCamera) => {
        if (responseCamera !== 'authorized') {
          alertPermission();
        }
      });
    }
  });
};


const checkCameraAndLocation = async () => {
  const permissions = await Permissions.checkMultiple(['camera', 'location']).then(response => (response));
  const gpsEnabled = await checkEnableGps();
  if (permissions.camera !== 'authorized' || permissions.location !== 'authorized' || !gpsEnabled) {
    return false;
  }
  return true;
};

export const requestPermissions = async (navigation) => {
  checkCameraAndLocation().then((authorized) => {
    if (authorized) {
      navigation.navigate('Wizard');
    } else {
      requestPermissionLocationAndCamera();
    }
  });
};
