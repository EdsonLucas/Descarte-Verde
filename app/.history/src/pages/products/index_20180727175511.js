import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Accordion from 'react-native-collapsible/Accordion';
import Display from 'react-native-display';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secundary,
        paddingTop: metrics.basePadding,
        paddingBottom: metrics.basePadding,
    },

    cardContainer: {
        ...general.box,
        marginHorizontal: metrics.basePadding,
        marginTop: metrics.baseMargin,
        shadowOffset:{ width: 10, height: 10 },
        shadowColor: colors.black,
        shadowOpacity: 10,
        borderLeftColor: colors.success,
        borderLeftWidth: 8,
        elevation: 5,
    },

    cardContainerAfter: {
        backgroundColor: '#cecece',
        borderRadius: metrics.baseRadius,
        marginHorizontal: metrics.basePadding * 2,
        paddingBottom: metrics.basePadding,
        marginTop: -10,
    },

    contextContainer: {
        ...general.box,
        marginHorizontal: metrics.basePadding * 2,
        marginTop: -15,
    },

    infoTitle: {
        flexDirection: 'row',
    },

    itemTitle: {
        fontWeight: '600',
        fontSize: 18,
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
        title: 'Embalagem Longa Vida',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
    },
    {
        key: '2',
        title: 'Metal',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
    },
    {
        key: '3',
        title: 'Papel',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
    }, 
    {
        key: '4',
        title: 'Plástico',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
    }, 
    {
        key: '5',
        title: 'Vidro',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        content: 'Lorem ipsum...',
        icon: 'bottle-wine',
        colors: '#666',
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

    _renderHeader(cards, isActive) {
        return (
        <View>
            <View style={styles.cardContainer} key={cards.key}>
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
            <Display enable={(isActive ? true : false)}>
                <View style={styles.cardContainerAfter}></View>              
            </Display>
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
            <View style={styles.container}>
                <ScrollView>
                    <Accordion
                        sections={cards}
                        initiallyActiveSection={0}
                        underlayColor={colors.transparent}
                        renderHeader={this._renderHeader}
                        renderContent={this._renderContent}
                    />
                </ScrollView>
            </View>
        );
    }
}