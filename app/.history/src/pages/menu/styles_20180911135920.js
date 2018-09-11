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
      backgroundColor: colors.white,
    },

    imageContainer: {
      alignItems: 'center',
      marginTop: metrics.baseMargin * 2,
      marginBottom: metrics.baseMargin,
    },

    hr: {
      width: metrics.screenWidth,
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
    },

    listContainer: {
      flexDirection: 'row',
      width: metrics.screenWidth - 30,
      paddingVertical: metrics.basePadding / 2,
      borderBottomWidth: 1,
      borderBottomColor: '#EEEEEE',
    },

    button: {
      flex: 1,
      flexDirection: 'row',
    },

    buttonText: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: metrics.basePadding,
        marginLeft: metrics.baseMargin / 2,
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
