import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topoContainer: {
        ...general.topoContainer,
        backgroundColor: colors.main2,
    },

    topoTitle: {
        ...general.title,
        ...general.topoTitle,
    },

    subContainer: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      backgroundColor: colors.white,
    },

    imageContainer: {
      marginTop: metrics.baseMargin * 2,
      marginBottom: metrics.baseMargin,
    },

    hr: {
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
    },

    listContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingVertical: metrics.basePadding / 2,
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
