import React, {
    Platform
} from 'react';
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
        colors: '#666',
        remote: require('images/banner.png'),
    },
    {
        key: '2',
        title: 'Vidro',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        icon: 'bottle-wine',
        colors: '#666',
        remote: require('images/banner.png'),
    }
];

const Produtos = () => (
    cards.map( card => (
        <View style={styles.container} key={card.key}>
            <View style={styles.infoTitle}>
                <Icon name={card.icon} size={30} color={card.colors} />
                <Text style={styles.itemTitle}>{card.title}</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Text>{card.text}</Text>
                </View>
            </View>
        </View>
    ))
);

Produtos.navigationOptions = {
    title: 'Produtos descartáveis',
    swipeEnabled: false,
    headerStyle: {
      backgroundColor: '#fff',
      borderBottomColor: '#cecece',
      borderBottomWidth: 1,
      height: (Platform.OS === 'ios') ? 48 : 50,
    },
    headerTintColor: '#666',
    headerTitleStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    tabBarIcon: ({ tintColor }) => <Icon name="recycle" size={18} color={tintColor} />
};

export default Produtos;