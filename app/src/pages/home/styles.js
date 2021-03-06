import { StyleSheet, Platform } from 'react-native';
import { general, colors, metrics} from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imageContainer: {
        flex: 0.3,
        alignItems: 'center',
        paddingTop: (Platform.OS === 'android') ? metrics.screenHeight / 10 : metrics.screenHeight / 5,
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
        justifyContent: 'center',
        backgroundColor: colors.white,
    },

    subForm: {
        flexDirection: 'row',
    },

    centerForm: {
        marginTop: 2,
    },

    imageBackground2: {
        flexGrow: 2,
        flexShrink: 1,
        margin: metrics.baseMargin / 3,
        minHeight: metrics.screenHeight - metrics.screenHeight * 0.72,
    },

    imageBackground: {
        flex: 1,
        flexShrink: 1,
        flexGrow: 2,
        width: metrics.screenWidth,
        margin: metrics.baseMargin / 3,
        minHeight: metrics.screenHeight - metrics.screenHeight * 0.72,
    },

    button: {
        flex: 1,
        flexShrink: 1,
        flexGrow: 2,
        minHeight: metrics.screenHeight - metrics.screenHeight * 0.72,
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