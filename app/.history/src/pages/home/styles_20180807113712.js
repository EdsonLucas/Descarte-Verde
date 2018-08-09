import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.4,
        alignItems: 'center',
        paddingTop: metrics.baseMargin * 7,
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
        flex: 0.6,
        paddingHorizontal: metrics.basePadding,
        justifyContent: 'flex-end',
        backgroundColor: 'red',
    },

    subForm: {
        flexDirection: 'row',
    },

    button: {
        flex: 1,
        borderWidth: 3,
        borderColor: colors.white,
        backgroundColor: colors.transparent,
        margin: metrics.baseMargin,
        height: 130,
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