import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.3,
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
        flex: 0.7,
        paddingHorizontal: metrics.basePadding,
        justifyContent: 'flex-end',
    },

    subForm: {
        flexDirection: 'row',
    },

    centerForm: {
        flex: 1,
        alignItems: 'center',
        height: 100,
        marginHorizontal: metrics.baseMargin,
        borderRadius: metrics.baseRadius * 2,
    },

    imageBackground: {
        flex: 1,
        borderRadius: metrics.baseRadius * 2,
        width: metrics.screenWidth,
        margin: metrics.baseMargin,
        height: 100,
    },

    button: {
        flex: 1,
        height: 100,
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
