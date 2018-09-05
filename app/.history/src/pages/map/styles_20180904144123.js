import { StyleSheet, Platform } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    marginBottom: (Platform.OS === 'ios') ? metrics.baseMargin * 30 : metrics.baseMargin * 33,
  },

  topoTitle: {
    ...general.title,
    ...general.topoTitle,
    color: colors.text,
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
    padding: metrics.basePadding,
  },

  title: {
    ...general.title,
    alignItems: 'flex-start',
    paddingBottom: metrics.basePadding / 10,
  },

  subTitle: {
    alignItems: 'flex-start',
    marginBottom: metrics.baseMargin,
  },

  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: metrics.basePadding / 2,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE'
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
    flex: (Platform.OS === 'android') ? 1 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: (Platform.OS === 'ios') ? metrics.baseMargin / 2 : metrics.baseMargin * 2,
  },

  distanceIcon: {
    backgroundColor: colors.main2,
    paddingVertical: (Platform.OS === 'ios') ? 2 : 2,
    paddingHorizontal: (Platform.OS === 'ios') ? 9 : 9,
    borderRadius: metrics.baseRadius,
  },

  distanceTitle: {
    ...general.title,
    fontSize: 12,
    marginLeft: 10,
  },

  loading: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: 'red'
  }
});

export default styles;
