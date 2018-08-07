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
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        fontWeight: 'bold'
    },

    text: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        fontWeight: '400',
        color: colors.text,
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
        textAlign: 'center',
        flexGrow: 1,
        color: colors.white,
        padding: metrics.basePadding,
    },
};