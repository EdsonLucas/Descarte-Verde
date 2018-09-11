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
        color: colors.title,
    },

    subContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white,
    },

    imageContainer: {
      alignItems: 'center',
      marginBottom: metrics.baseMargin * 3,
    },

    listContainer: {
      marginLeft: metrics.screenWidth - 320,
      paddingVertical: metrics.basePadding,
      borderTopWidth: 1,
      borderTopColor: '#EEEEEE',
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
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
