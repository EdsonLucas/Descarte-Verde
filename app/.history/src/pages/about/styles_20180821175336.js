import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topoContainer: {
        ...general.topoContainer,
    },

    topoTitle: {
        ...general.title,
        ...general.topoTitle,
    },

    subContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    imageContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginBottom: metrics.baseMargin * 3,
    },

    imageSubContainer: {
        paddingVertical: 0,
        paddingHorizontal: metrics.basePadding,
    },

    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: metrics.baseMargin * 2,
        marginVertical: metrics.baseMargin,
        backgroundColor: 'red',
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: metrics.basePadding / 5,
    },

    title: {
        ...general.title,
        fontSize: 18,
        marginBottom: metrics.baseMargin,
        color: colors.white,
    },

    description: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: colors.white,
    },

});

export default styles;
