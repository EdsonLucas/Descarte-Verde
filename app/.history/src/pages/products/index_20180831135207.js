import React, { Component } from 'react';
import { View, ScrollView, Text, Platform, StatusBar } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import LinearGradient from 'react-native-linear-gradient';
import { MaterialCommunityIcons } from 'icons';
import { metrics, colors } from 'styles';
import styles from './styles';

const cards = [
  {
      key: '1',
      title: 'Papel',
      text: 'Após o recolhimento do material, ele é triturado e misturado com água para que suas fibras sejam separadas. Normalmente as fibras recicladas são misturadas a pastas de refinador com fibras virgens. Essa nova mistura de pasta de celulose é submetida a um processo de refinamento e depuração onde o novo papel irá ganhar mais resistência e qualidade.',
      contentTitle: 'Materiais Descartáveis:',
      contentText: 'Jornais e Revistas \n\n Listas Telefônicas \n\n Papel Sulfite \n\n Papel de Fax \n\n Folhas de Caderno',
      contentText2: 'Formulários \n\n Caixas em Geral \n\n Fotocópias \n\n Envelopes \n\n Cartazes',
      padding: 0,
      border: colors.primary,
  },
  {
      key: '2',
      title: 'Plástico',
      text: 'Podem ser reprocessados por refusão ou remoldagem, onde os plásticos são lavados, fragmentados e triturados, de forma que, uma vez limpos, podem ser fabricados novos produtos a partir deles.',
      contentTitle: 'Materiais Descartáveis:',
      contentText: 'Copos \n\n Sacos/Sacolas \n\n Frascos \n\n Tampas',
      contentText2: 'Potes \n\n Canos PVC \n\n Tubos PVC \n\n Garrafas Pet',
      padding: metrics.basePadding,
      border: colors.danger,
  },
  {
      key: '3',
      title: 'Vidro',
      text: 'O vidro é triturado, transformando-se em cacos de vidro homogêneos. os cacos são então aquecidos e fundidos a uma temperatura acima de 1300°C. E por fim, o vidro pode ser moldado e utilizado na composição de novas embalagens',
      contentTitle: 'Materiais Descartáveis:',
      contentText: 'Garrafas \n\n Potes \n\n Embalagens',
      contentText2: 'Frascos \n\n Copos \n\n Para-brisas',
      padding: metrics.basePadding,
      border: colors.success,
  },
  {
    key: '4',
    title: 'Metal',
    text: 'As embalagens são prensadas e depois são derretidas a 700˚C. O material passa por um processo de deformação para ser reutilizado como novo produto.',
    contentTitle: 'Materiais Descartáveis:',
    contentText: 'Tampas \n\n Latas \n\n Panelas sem cabo \n\n Ferragens \n\n Arames',
    contentText2: 'Chapas \n\n Canos \n\n Pregos \n\n Parafusos \n\n Ferramentas',
    padding: metrics.basePadding,
    border: colors.warning,
  },
  {
    key: '5',
    title: 'Tudo de Creme Dental',
    text: 'Os tubos vazios são triturados em um moinho. Depois, seus pedaços são prensados e misturados a uma resina especial. A resina seca e o material assume sua forma final.',
    contentTitle: 'Materiais Descartáveis:',
    contentText: 'Tampas',
    contentText2: 'Tubo',
    padding: metrics.basePadding * 3,
    border: '#bf9957',
  },
];

export default class Produtos extends Component {

    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name="recycle" size={(Platform.OS === 'ios') ? 18 : 24} color={tintColor} />
    }

    _renderHeader(cards, index, isActive) {
        return (
        <View>
            <View style={[styles.cardContainer, { borderLeftColor: cards.border, zIndex: 5 }]} key={cards.key}>
                <View style={styles.infoTitle}>
                    <Text style={styles.itemTitle}>{cards.title}</Text>
                    <View style={styles.hr}></View>
                    <Text style={styles.itemSubTitle}>Processo de descarte:</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.info}>{cards.text}</Text>
                </View>
            </View>
            {
                !isActive &&
                <View style={styles.cardContainerAfter}></View>
            }
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
                <View style={[styles.contextText2, { paddingRight: cards.padding}]}>
                    <Text style={styles.infoText}>{cards.contentText2}</Text>
                </View>
            </View>
        </View>
        );
    }

    render() {
        return (
            <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#00c398" />
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
