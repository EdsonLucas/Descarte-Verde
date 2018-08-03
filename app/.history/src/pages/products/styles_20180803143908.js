import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.third,
        paddingTop: metrics.basePadding / 2,
        paddingBottom: metrics.basePadding / 2,
    },

    topoContainer: {
        ...general.topoContainer,
    },

    topoTitle: {
        ...general.title,
        ...general.topoTitle,
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
        backgroundColor: colors.gray,
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
        ...general.title,
        fontSize: 18,
    },

    infoContainer: {
        flexDirection: 'row',
        marginTop: metrics.baseMargin
    },

    info: {
        color: colors.text,
        fontFamily: 'Roboto-Thin',
    },

    infoText: {
        color: colors.text,
        marginLeft: metrics.baseMargin / 2,
        fontFamily: 'Roboto-Thin',
    }
});

export default styles;