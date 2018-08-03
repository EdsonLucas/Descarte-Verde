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
    },

    topoContainer: {
        backgroundColor: colors.white,
        marginTop: (Platform.OS === 'ios') ? 24 : 0,
        marginBottom: 20,
        shadowColor: colors.black,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 100
    },

    topoTitle: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333333',
        padding: 20,
        fontWeight: 'bold'
    },
};