import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.2,
        alignItems: 'center',
        paddingTop: metrics.baseMargin,
        marginBottom: metrics.baseMargin,
        paddingHorizontal: metrics.basePadding,
        backgroundColor: colors.white,
    },

    title: {
        ...general.title,
        textAlign: 'center',
        fontSize: 18,
        marginTop: metrics.baseMargin * 2,
    },

    text: {
        ...general.text,
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
        paddingLeft: metrics.basePadding / 2,
    },

    form: {
        flex: 0.8,
        paddingHorizontal: metrics.basePadding,
        justifyContent: 'flex-end',
    },

    subForm: {
        flexDirection: 'row',
    },

    centerForm: {
        flex: 0.9,
    },

    imageBackground: {
        flex: 1,
        borderRadius: metrics.baseRadius * 2,
        width: metrics.screenWidth,
        margin: metrics.baseMargin,
        height: 120,
    },

    button: {
        flex: 1,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        ...general.title,
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
    },
});

export default styles;
