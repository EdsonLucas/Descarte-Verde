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

    imageContainer: {
        paddingVertical: 0,
        paddingHorizontal: metrics.basePadding,
    },

    cardContainer: {
        ...general.box,
        marginHorizontal: metrics.baseMargin * 2,
        marginVertical: metrics.baseMargin,
        padding: metrics.basePadding,

        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,

        elevation: 5,
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.basePadding / 5,
    },

    title: {
        ...general.title,
        fontSize: 18,
        marginBottom: metrics.baseMargin,
    },

    description: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: colors.text,
    },

});
