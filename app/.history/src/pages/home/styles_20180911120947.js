import { StyleSheet } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.3,
        alignItems: 'center',
        paddingTop: metrics.screenHeight / 20,
        paddingHorizontal: metrics.basePadding,
        backgroundColor: colors.main2,
    },

    title: {
        ...general.title,
        textAlign: 'center',
        fontSize: 18,
        color: colors.white,
        marginTop: metrics.baseMargin * 2,
    },

    text: {
        ...general.text,
        textAlign: 'center',
        fontSize: 16,
        paddingLeft: metrics.basePadding / 2,
    },

    form: {
        flex: 0.7,
        paddingHorizontal: metrics.basePadding,
        paddingVertical: metrics.basePadding / 2,
        justifyContent: 'flex-end',
        backgroundColor: colors.white,
    },

    subForm: {
        flexDirection: 'row',
    },

    centerForm: {
        flex: 1,
        marginTop: metrics.baseMargin,
    },

    imageBackground2: {
        margin: metrics.baseMargin / 3,
        height: metrics.screenHeight - 275,
    },

    imageBackground: {
        flex: 1,
        width: metrics.screenWidth,
        margin: metrics.baseMargin / 3,
        height: metrics.screenHeight - 275,
    },

    button: {
        flex: 1,
        height: metrics.screenHeight - 275,
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
