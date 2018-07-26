import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },

    itemTitle: {
        fontWeight: 'bold',
        fontSize: 24,
    },

    infoContainer: {
        flexDirection: 'row',
        marginTop: metrics.baseMargin
    },

    info: {
        color: colors.dark,
    },

    infoText: {
        color: colors.dark,
        fontSize: 12,
        marginLeft: metrics.baseMargin / 2
    }
});

const Produtos = () => (
    <View style={styles.container}>
        <Text style={styles.itemTitle}>Plástico</Text>

        <View style={styles.infoContainer}>
            <View style={styles.info}>
                <Text>Lorem Ipsum</Text>
            </View>
        </View>
    </View>
);

Produtos.navigationOptions({
    header: null
});

export default Produtos;