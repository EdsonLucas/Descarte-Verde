import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { Foundation } from 'icons';
import styles from './styles';

class Home extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Foundation name="home" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
    };

    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <Text style={styles.title}>Bem-vindo</Text>
                <Text style={styles.text}>
                    Para continuar, precisamos que você informe seu usuário no Github
                </Text>
                
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        autoCorrect={false}
                        placeholder="Digite seu usuário"
                        underlineColorAndroid="rgba(0, 0, 0, 0)"
                    />

                    <TouchableOpacity style={styles.button} onPress={ () => {} }>
                        <Text style={styles.buttonText}>Prosseguir</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
};

export default Home;
