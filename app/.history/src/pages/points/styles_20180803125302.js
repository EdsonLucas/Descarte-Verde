const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.third,
        paddingTop: metrics.basePadding / 2,
    },

    cardContainer: {
        ...general.box,
        flexDirection: 'row',
        marginHorizontal: metrics.baseMargin * 2,
        marginBottom: metrics.baseMargin,
        padding: 0,
        shadowOffset: {
            width: 5,
            height: 5
        },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        elevation: 5,
    },

    imageContainer: {
        justifyContent: 'center',
        borderRadius: metrics.baseRadius,
    },

    subContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: metrics.basePadding,
    },

    title: {
        fontSize: 18,
        fontFamily: 'Roboto-Regular',
        color: colors.white,
        paddingBottom: metrics.basePadding / 10,
    },

    description: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: colors.white,
    }
});