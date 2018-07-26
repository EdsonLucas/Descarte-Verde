import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { general, metrics, colors } from 'styles';

const styleshit = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: 'black',
        shadowOpacity: 0.3,
    },

    infoTitle: {
        flexDirection: 'row',
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
    <View style={stylesshit.container}>
        <View style={stylesshit.infoTitle}>
            <Icon name="bottle-wine" size={30} color={colors.dark} />
            <Text style={stylesshit.itemTitle}>Plástico</Text>
        </View>
        <View style={stylesshit.infoContainer}>
            <View style={stylesshit.info}>
                <Text>Lorem Ipsum</Text>
            </View>
        </View>
    </View>
);

Produtos.navigationOptions = {
    title: 'Produtos descartáveis',
    tabBarIcon: ({ tintColor }) => <Icon name="recycle" size={18} color={tintColor} />
};

export default Produtos;