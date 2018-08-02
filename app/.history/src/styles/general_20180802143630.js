import colors from './colors';
import metrics from './metrics';

export default {
    box: {
        backgroundColor: colors.white,
        borderRadius: metrics.baseRadius,
        padding: metrics.basePadding,
        borderWidth: 1,
        borderColor: colors.gray,
    },

    title: {
        fontFamily: 'Roboto-Bold',
        fontWeight: '600'
    }
};