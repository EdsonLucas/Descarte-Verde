import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.3,
        alignItems: 'center',
        paddingTop: metrics.baseMargin * 5,
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
        paddingVertical: metrics.basePadding / 2,
        justifyContent: 'flex-end',
    },

    subForm: {
        flexDirection: 'row',
    },

    centerForm: {
        alignItems: 'center',
        height: 120,
        marginTop: metrics.baseMargin / 2,
        marginHorizontal: metrics.baseMargin / 2,
        borderRadius: metrics.baseRadius * 2,
    },

    imageBackground: {
        flex: 1,
        width: metrics.screenWidth,
        margin: metrics.baseMargin / 2,
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
