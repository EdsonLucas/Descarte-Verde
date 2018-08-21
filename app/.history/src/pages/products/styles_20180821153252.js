import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        marginBottom: 3,
        borderLeftWidth: 8,

        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,

        elevation: 5,
    },

    cardContainerAfter: {
        backgroundColor: colors.white,
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
        paddingLeft: metrics.basePadding / 3,
    },

    infoTitle: {
        flexDirection: 'column',
    },

    itemTitle: {
        ...general.title,
    },

    itemSubTitle: {
      ...general.text,
      color: colors.regular,
      fontWeight: '600',
      paddingTop: 10,
    },

    hr: {
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE'
    },

    infoContainer: {
        flexDirection: 'row',
        marginTop: metrics.baseMargin / 2
    },

    info: {
        ...general.text,
    },

    infoText: {
        ...general.text,
        marginLeft: metrics.baseMargin / 2,
    },
});

export default styles;
