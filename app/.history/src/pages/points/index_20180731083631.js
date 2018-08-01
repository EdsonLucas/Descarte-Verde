import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { View, Text, Platform, StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secundary,
        flexDirection: 'column',
    },
    
    subContainer: {
        flex: 1,
    }
});

const points = [
    {
        key: '1',
        title: 'PEV - (Ponto de Entrega Voluntária)',
        description: 'São os locais que recebem embalagens longa vida (entre outros materiais) para serem enviados à reciclagem. É o primeiro passo do processo, onde o material doméstico (pouco volume) geralmente é entregue. Boa parte das cidades já conta com estes postos, onde as pessoas podem depositar diretamente o material que separaram em casa.',
    },

    {
        key: '2',
        title: 'Comércios',
        description: 'Locais que compram material longa vida (e outros materiais recicláveis) para beneficiamento e envio aos recicladores. Eles adquirem o material, geralmente em grande quantidade, principalmente das cooperativas. Após a fase da coleta, as embalagens longa vida, já enfardadas, são enviadas às empresas recicladoras, que vão se encarregar de separar os elementos que compõem as embalagens e transformá-los em matéria-prima para uma série de aplicações.',
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: 'Iniciativas sociais que trabalham com a coleta e triagem do material reciclável (inclusive embalagem longa vida) para beneficiamento e envio aos recicladores. A maior parte do material coletado vem do trabalho dos catadores cooperados ou dos programas de coleta seletiva municipais.',
    }
]

export default class Pontos extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Icon name="address" size={(Platform.OS === 'ios') ? 18 : 23} color={tintColor} />
    }
    
    render() {
        return(
            <View styles={styles.container}>
                <View styles={styles.subContainer}>
                    <Text>oi</Text>
                </View>
                <View styles={styles.subContainer}></View>
                <View styles={styles.subContainer}></View>
            </View>
        );
    }
}