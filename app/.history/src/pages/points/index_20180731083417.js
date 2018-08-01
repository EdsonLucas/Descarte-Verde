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