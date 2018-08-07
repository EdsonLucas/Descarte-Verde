import React, { Component } from 'react';
import { View, ScrollView, Text, Platform, StatusBar } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Display from 'react-native-display';
import { MaterialCommunityIcons } from 'icons';
import { colors } from 'styles';
import styles from './styles';

const texts = [
    {
        key: '1',
        contentText: ['Tampas', 'Latas', 'Panelas sem cabo', 'Ferragens', 'Arames'],
        contentText2: ['Chapas', 'Canos', 'Pregos', 'Parafusos', 'Ferramentas'],
    },
    {
        key: '2',
        contentText: ['Jornais e Revistas', 'Listas Telefônicas', 'Papel Sulfite', 'Papel de Fax', 'Folhas de Caderno'],
        contentText2: ['Formulários', 'Caixas em Geral', 'Fotocópias', 'Envelopes', 'Cartazes'],
    },
    {
        key: '3',
        contentText: ['Copos', 'Sacos/Sacolas', 'Fracos', 'Tampas'],
        contentText2: ['Potes', 'Canos PVC', 'Tubos PVC', 'Garrafas Pet'],
    },
    {
        key: '4',
        contentText: ['Garrafas', 'Potes', 'Embalagens'],
        contentText2: ['Frascos', 'Copos', 'Para-brisas'],
    },
]

const cards = [ 
    {
        key: '1',
        title: 'Metal',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        border: colors.info,
    },
    {
        key: '2',
        title: 'Papel',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        border: colors.success,
    }, 
    {
        key: '3',
        title: 'Plástico',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        border: colors.warning,
    }, 
    {
        key: '4',
        title: 'Vidro',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        border: colors.danger,
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
        headerTintColor: colors.dark,
        headerTitleStyle: {
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center'
        },
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="recycle" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />  
    }

    _renderHeader(cards, index, isActive) {
        return (
        <View>
            <StatusBar barStyle="dark-content" />
            
            <View style={[styles.cardContainer, { borderLeftColor: cards.border }]} key={cards.key}>
                <View style={styles.infoTitle}>
                    <Text style={styles.itemTitle}>{cards.title}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text>{cards.text}</Text>
                    </View>
                </View>            
            </View>
            <Display enable={(Platform.OS === 'ios') ? false : true}>
                { 
                  !isActive &&  
                  <View style={styles.cardContainerAfter}></View>
                }
            </Display>
        </View>
        )
    }

     _renderContent(cards) {
        return (
        <View>
            <View style={styles.contentTitle}>
                <Text>{cards.contentTitle}</Text>
            </View>
            {
                texts.map(text => (
                    <View style={styles.contextContainer}>
                        <View key={text.key} style={styles.contextText}>
                            <Text>{text.contentText}</Text>
                        </View>
                        <View key={text.key} style={styles.contextText2}>
                            <Text>{text.contentText2}</Text>
                        </View>                        
                    </View>
                ))
            }
        </View>    
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Accordion
                        sections={cards}
                        underlayColor={colors.transparent}
                        renderHeader={this._renderHeader.bind(this)}
                        renderContent={this._renderContent} 
                    />
                </ScrollView>
            </View>
        );
    }
}