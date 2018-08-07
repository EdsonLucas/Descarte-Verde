import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: metrics.basePadding / 2,
        paddingBottom: metrics.basePadding / 2,
    },

    cardContainer: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        borderLeftWidth: 8,
        elevation: 5,
        marginBottom: 3,
    },

    cardContainerAfter: {
        backgroundColor: '#edeef1',
        borderRadius: metrics.baseRadius,
        marginHorizontal: metrics.basePadding * 2,
        paddingBottom: metrics.basePadding,
        marginTop: -10,
    },

    contextContainer: {
        ...general.box,
        flexDirection: 'row',
        marginHorizontal: metrics.basePadding * 2,
        marginTop: -5,
    },

    contentTitle: {
        ...general.box,
        borderRadius: 0,
        paddingLeft: metrics.basePadding,
        paddingTop: metrics.basePadding,
        paddingBottom: metrics.basePadding / 10,
        marginHorizontal: metrics.basePadding * 2,
    },

    contextText: {
        flex: 1,
    },

    contextText2: {
        paddingLeft: metrics.basePadding / 2,
    },

    infoTitle: {
        flexDirection: 'row',
    },

    itemTitle: {
        fontWeight: '600',
        fontSize: 18,
        fontFamily: 'Roboto-Bold',
    },

    infoContainer: {
        flexDirection: 'row',
        marginTop: metrics.baseMargin
    },

    info: {
        color: colors.text,
        fontFamily: 'Roboto-Regular',
    },

    infoText: {
        color: colors.text,
        fontSize: 12,
        marginLeft: metrics.baseMargin / 2,
        fontFamily: 'Roboto-Regular',
    }
});

export default styles;