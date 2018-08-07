import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: metrics.baseMargin * 5,
        paddingHorizontal: metrics.basePadding,
    },

    imageContainer: {
        flex: 0.4,
        alignItems: 'center',
        marginBottom: metrics.baseMargin,
    },

    title: {
        ...general.title,
        textAlign: 'center',
        fontSize: 20,
        color: colors.white,
        marginTop: metrics.baseMargin * 5,
    },

    text: {
        textAlign: 'center',
        marginTop: metrics.baseMargin,
        fontSize: 14,
        color: colors.light,
        lineHeight: 21,
    },

    form: {
        flex: 0.6,
        justifyContent: 'flex-end',
    },

    subForm: {
        flexDirection: 'row',
    },

    button: {
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: metrics.baseRadius,
        margin: metrics.baseMargin,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
});

export default styles;
