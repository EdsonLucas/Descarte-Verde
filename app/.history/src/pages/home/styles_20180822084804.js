import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.5,
        alignItems: 'center',
        paddingTop: metrics.baseMargin * 5,
        paddingHorizontal: metrics.basePadding,
        marginBottom: metrics.baseMargin,
        backgroundColor: colors.white,
    },

    title: {
        ...general.title,
        textAlign: 'center',
        fontSize: 18,
        marginTop: metrics.baseMargin * 2,
        color: colors.title
    },

    text: {
        ...general.text,
        textAlign: 'center',
        fontSize: 16,
        color: colors.white,
        paddingLeft: metrics.basePadding / 2,
        marginBottom: metrics.baseMargin,
    },

    form: {
        flex: 0.5,
        paddingHorizontal: metrics.basePadding,
        paddingVertical: metrics.basePadding / 2,
        justifyContent: 'flex-end',
        backgroundColor: colors.main2
    },

    subForm: {
        flexDirection: 'row',
    },

    centerForm: {
        flex: 1,
        marginTop: metrics.baseMargin,
    },

    imageBackground: {
        flex: 1,
        width: metrics.screenWidth,
        margin: metrics.baseMargin / 3,
        height: 110,
    },

    button: {
        flex: 1,
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        ...general.title,
        color: colors.white,
        textAlign: 'center',
    },
});

export default styles;
