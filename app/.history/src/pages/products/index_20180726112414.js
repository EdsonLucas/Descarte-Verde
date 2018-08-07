import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
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

const cards = [ 
    {
        key: '1',
        title: 'Plástico',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        icon: 'bottle-wine',
        colors: ['#dff9b8', '#9decaa', '#00c99d'],
        remote: require('images/banner.png'),
    }
];

const Produtos = ({ cards }) => (
    { cards.map( card => (
    <View style={styles.container}>
        <View style={styles.infoTitle}>
            <Icon name={card.icon} size={30} color={colors.dark} />
            <Text style={styles.itemTitle}>{card.title}</Text>
        </View>
        <View style={styles.infoContainer}>
            <View style={styles.info}>
                <Text>{card.text}</Text>
            </View>
        </View>
    </View>
    ))}
);

Produtos.navigationOptions = {
    title: 'Produtos descartáveis',
    tabBarIcon: ({ tintColor }) => <Icon name="recycle" size={18} color={tintColor} />
};

export default Produtos;