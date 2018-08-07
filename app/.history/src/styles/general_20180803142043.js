import colors from './colors';
import metrics from './metrics';
import { Platform } from 'react-native';

export default {
    box: {
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        padding: metrics.basePadding,
    },

    title: {
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold'
    },

    topoContainer: {
        backgroundColor: colors.transparent,
        marginTop: (Platform.OS === 'ios') ? 24 : 0,
        marginBottom: metrics.baseMargin,
        shadowColor: colors.black,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 100,
        elevation: 5,
  },

    topoTitle: {
        ...general.title,
        fontSize: 18,
        textAlign: 'center',
        flexGrow: 1,
        color: colors.dark,
        padding: metrics.basePadding,
    },
};