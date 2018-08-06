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
        fontWeight: 'bold',
        color: colors.title,
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
    },

    topoTitle: {
        textAlign: 'center',
        flexGrow: 1,
        color: colors.white,
        padding: metrics.basePadding,
    },
};
