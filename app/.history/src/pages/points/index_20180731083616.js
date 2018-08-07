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
        description: '',
    },

    {
        key: '3',
        title: 'Cooperativas',
        description: '',
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