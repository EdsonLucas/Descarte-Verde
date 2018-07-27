import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Accordion from 'react-native-collapsible/Accordion';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        shadowOpacity: 0.75,
        shadowRadius: 5,
        shadowColor: 'red',
        overflow: 'hidden',
        shadowOffset: { height: 0, width: 0 },
        borderLeftColor: colors.success,
        borderLeftWidth: 8
    },

    containerAfter: {
        backgroundColor: colors.white,
        marginHorizontal: metrics.basePadding * 2,
        paddingBottom: 10,
    },

    contextContainer: {
        ...general.box,
        marginHorizontal: metrics.basePadding * 2,
        marginTop: -15,
        justifyContent: 'center',
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
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
        remote: require('images/banner.png'),
    },
    {
        key: '2',
        title: 'Vidro',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
        remote: require('images/banner.png'),
    }
];

export default class Produtos extends Component {
    static navigationOptions = {
        title: 'Materiais Descartáveis',
        swipeEnabled: false,
        headerStyle: {
        backgroundColor: '#fff',
        height: (Platform.OS === 'ios') ? 48 : 50,
        },
        headerTintColor: '#666',
        headerTitleStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        },
        tabBarIcon: ({ tintColor }) => <Icon name="recycle" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />  
    }

    _renderHeader(cards) {
        return (
        <View>
            <View style={styles.container} key={cards.key}>
                <View style={styles.infoTitle}>
                    <Icon name={cards.icon} size={30} color={cards.colors} />
                    <Text style={styles.itemTitle}>{cards.title}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text>{cards.text}</Text>
                    </View>
                </View>            
            </View>
            <View style={styles.containerAfter}></View>  
        </View>
        )
    }

     _renderContent(cards) {
        return (
        <View style={styles.contextContainer}>
            <Text>{cards.content}</Text>
        </View>
        );
    }

    render() {
        return (
            <Accordion
                sections={cards}
                underlayColor={colors.transparent}
                renderHeader={this._renderHeader}
                renderContent={this._renderContent}
            />
        );
    }
}