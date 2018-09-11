import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main2,
    },

    topoContainer: {
        ...general.topoContainer,
        flexDirection: 'row',
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
      marginBottom: metrics.baseMargin,
    },

    imageSubContainer: {
        paddingVertical: 0,
        paddingHorizontal: metrics.basePadding,
    },

    cardContainer: {
        marginHorizontal: metrics.baseMargin * 1.5,
        marginVertical: metrics.baseMargin,
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: metrics.basePadding,
    },

    title: {
        ...general.title,
        fontSize: 18,
        marginBottom: metrics.baseMargin,
        color: colors.white,
    },

    description: {
        ...general.text,
        color: colors.white,
    },

});

export default styles;
