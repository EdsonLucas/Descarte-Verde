import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StatusBar, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ResponsiveImage from 'react-native-responsive-image';
import { Foundation, MaterialCommunityIcons, Ionicons } from 'icons';
import { colors } from 'styles';
import styles from './styles';

class Home extends Component {
    static navigationOptions = {
        header: null,
        swipeEnabled: false,
        tabBarIcon: ({ tintColor }) => <Foundation name="home" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
    };

    render() {
        return (
            <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.container}>
                <StatusBar barStyle="light-content" />


                <View style={styles.imageContainer}>
                    <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/logo-white.png')} initWidth={320} initHeight={62} />

                    <Text style={styles.title}>Encontre os pontos de reciclagem mais próximos a você!</Text>
                </View>

                <View style={styles.form}>
                    <Text style={styles.text}>
                        Escolha o material que deseja descartar
                    </Text>

                    <View style={styles.subForm}>
                        <TouchableOpacity style={styles.button} onPress={ () => {} }>
                            <Ionicons name="ios-paper" size={(Platform.OS === 'ios') ? 18 : 20} color={colors.white} />
                            <Text style={styles.buttonText}>Papel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={ () => {} }>
                            <MaterialCommunityIcons name="recycle" size={(Platform.OS === 'ios') ? 18 : 20} color={colors.white} />
                            <Text style={styles.buttonText}>Plástico</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.subForm}>
                        <TouchableOpacity style={styles.button} onPress={ () => {} }>
                            <MaterialCommunityIcons name="bottle-wine" size={(Platform.OS === 'ios') ? 18 : 20} color={colors.white} />
                            <Text style={styles.buttonText}>Vidro</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={ () => {} }>
                            <MaterialCommunityIcons name="recycle" size={(Platform.OS === 'ios') ? 18 : 20} color={colors.white} />
                            <Text style={styles.buttonText}>Metal</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </LinearGradient>
        )
    }
};

export default Home;
