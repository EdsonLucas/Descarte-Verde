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

    cardContainer: {
        flex: 0.9,
        padding: 0,
        justifyContent: 'flex-end',
        marginHorizontal: metrics.baseMargin / 2,
        marginBottom: metrics.baseMargin,

        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,

        elevation: 5,
    },

    subContainer: {
        paddingHorizontal: metrics.basePadding,
        paddingTop: metrics.basePadding * 8,
        paddingBottom: metrics.basePadding,
    },

    title: {
        ...general.title,
        color: colors.white,
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        ...general.text,
        color: colors.white,
    }
});

export default styles;
