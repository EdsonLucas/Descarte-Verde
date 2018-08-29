import { StyleSheet, Platform } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },

  mapContainer: {
    flex: 1,
    position: 'absolute',
    top: (Platform.OS === 'android') ? 65 : 85,
    bottom:0,
    left: 0,
    right: 0,
  },

  topoContainer: {
    ...general.topoContainer,
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 0,
    paddingTop: (Platform.OS === 'ios') ? 24 : 0,
    marginBottom: metrics.baseMargin * 33,
  },

  topoTitle: {
    ...general.title,
    ...general.topoTitle,
    color: colors.text,
  },

  annotationContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.main,
    transform: [{
      scale: 0.8
    }],
  },

  placeContainer: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
  },

  cardContainer: {
    flexDirection: 'row',
    width: metrics.screenWidth - 110,
    backgroundColor: '#FFF',
    borderRadius: metrics.baseRadius,
    marginVertical: metrics.baseMargin * 5,
    padding: 0,
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowColor: colors.black,
    shadowOpacity: 0.5,
    elevation: 5,
  },

  imageContainer: {
    justifyContent: 'center',
    borderRadius: metrics.baseRadius,
    marginLeft: -20,
  },

  subContainer: {
    flex: 1,
    alignItems: 'flex-start',
    padding: metrics.basePadding,
  },

  title: {
    ...general.title,
    paddingBottom: metrics.basePadding / 10,
  },

  subTitle: {
    marginBottom: metrics.baseMargin,
  },

  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  descriptionContainer: {
    backgroundColor: colors.main,
    margin: metrics.baseMargin / 5,
    paddingVertical: metrics.basePadding / 7,
    paddingHorizontal: metrics.basePadding / 4,
    borderRadius: metrics.baseRadius * 3,
  },

  description: {
    ...general.text,
    color: colors.white,
  },

  distanceContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },

  distanceIcon: {
    backgroundColor: colors.main2,
    padding: (Platform.OS === 'ios') ? 8 : 7,
  },

  distanceTitle: {
    ...general.text,
    marginLeft: 10,
  },
});

export default styles;
