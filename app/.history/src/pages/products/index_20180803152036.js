import React, { Component } from 'react';
import { View, ScrollView, Text, Platform, StatusBar } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Display from 'react-native-display';
import LinearGradient from 'react-native-linear-gradient';
import { MaterialCommunityIcons } from 'icons';
import { colors } from 'styles';
import styles from './styles';

const cards = [ 
    {
        key: '1',
        title: 'Metal',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        contentText: 'Tampas \n\n Latas \n\n Panelas sem cabo \n\n Ferragens \n\n Arames',
        contentText2: 'Chapas \n\n Canos \n\n Pregos \n\n Parafusos \n\n Ferramentas',
        border: colors.info,
    },
    {
        key: '2',
        title: 'Papel',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        contentText: 'Jornais e Revistas \n\n Listas Telefônicas \n\n Papel Sulfite \n\n Papel de Fax \n\n Folhas de Caderno',
        contentText2: 'Formulários \n\n Caixas em Geral \n\n Fotocópias \n\n Envelopes \n\n Cartazes',
        border: colors.success,
    }, 
    {
        key: '3',
        title: 'Plástico',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        contentText: 'Copos \n\n Sacos/Sacolas \n\n Fracos \n\n Tampas',
        contentText2: 'Potes \n\n Canos PVC \n\n Tubos PVC \n\n Garrafas Pet',
        border: colors.warning,
    }, 
    {
        key: '4',
        title: 'Vidro',
        text: 'Ao ativar sua conta, você aceita \n os termos e condições',
        contentTitle: 'Materiais Descartáveis:',
        contentText: 'Garrafas \n\n Potes \n\n Embalagens',
        contentText2: 'Frascos \n\n Copos \n\n Para-brisas',
        border: colors.danger,
    }
];

export default class Produtos extends Component {

    static navigationOptions = {
        title: 'Materiais descarte',
        tabBarLabel: () => {'Materiais descarte'}
        header: null,
        swipeEnabled: false,
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
                    <Text style={styles.info}>{cards.text}</Text>
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
                <Text style={[styles.itemTitle, { fontSize: 14 }]}>{cards.contentTitle}</Text>
            </View>
            <View style={styles.contextContainer}>
                <View style={styles.contextText}>
                    <Text style={styles.infoText}>{cards.contentText}</Text>
                </View>
                <View style={styles.contextText2}>
                    <Text style={styles.infoText}>{cards.contentText2}</Text>
                </View>
            </View>
        </View>    
        );
    }

    render() {
        return (
            <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.container}>
                <View style={styles.topoContainer}>
                    <Text style={styles.topoTitle}>Materiais de Descarte</Text>
                </View>
            
                <ScrollView>
                    <Accordion
                        sections={cards}
                        underlayColor={colors.transparent}
                        renderHeader={this._renderHeader.bind(this)}
                        renderContent={this._renderContent} 
                    />
                </ScrollView>
            </LinearGradient>
        );
    }
}