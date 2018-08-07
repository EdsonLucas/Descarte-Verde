import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import LinearGradient from 'react-native-linear-gradient';
import { Ionicons } from 'icons';
import { general, colors, metrics } from 'styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    topoContainer: {
        ...general.topoContainer,
    },

    topoTitle: {
        ...general.title,
        ...general.topoTitle,
    },

    imageContainer: {
        paddingVertical: 0,
        paddingHorizontal: metrics.basePadding,
    },

    cardContainer: {
        ...general.box,
        marginHorizontal: metrics.baseMargin * 2,
        marginVertical: metrics.baseMargin,
        padding: metrics.basePadding,

        shadowOffset:{ width: 5, height: 5 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,

        elevation: 5,
    },

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: metrics.basePadding / 5,
    },

    title: {
        ...general.title,
        fontSize: 18,
        margin: metrics.baseMargin,
    },

    description: {
        fontSize: 14,
        fontFamily: 'Roboto-Light',
        color: colors.text,
    },

});


const Sobre = () => (
    <LinearGradient start={{x: 0, y: 0.25}} end={{x: 0, y: 1}} colors={['#00c398', '#6ed39b','#cceeb0']} style={styles.container}>
        <View style={styles.topoContainer}>
            <Text style={styles.topoTitle}>Sobre</Text>
        </View>

        <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', backgroundColor: 'red'}}>
            <View style={styles.imageContainer}>
                <ResponsiveImage style={{resizeMode: 'stretch'}}  source={{ uri: 'https://s3.us-east-2.amazonaws.com/descarte-verde/logo-white.png?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSKAAnH1S2aU3MnCZFnoY6yURzL5OM6D33ke5LRFa2J7AsP6zgVH65G89zh%2BemA9J73e14Cu6%2B%2FNDSE1t1UZsqQpnLlcvZktLSuqT%2BOaufKGwJM8YDmzB%2BTHzTBnnVXfdbeDghmNB6f%2FvJEB9Lt4VyZyA5O1qIH6mTWMoDCveEOtDsIrsCGlit%2BYE6aSbkzDmdtBA9Iz1jW%2FGADxQLRRZi28uJtBHI1XexqEKOhCap4YPcfbkLMn4onL1mLIZ3gRiRTdPrKuPjvDfpDD8GPiyh20LggtzHXl90ID04M3KGrIvqdnsBB4oKHjm8VmpxwYxx83pHu4w6HLE12Ur3v1Mttnu38q2wMIdRAAGgw2MDM5NzU4OTg2MzQiDPjvXxOUoPmaj5GL0iq4A3fhvChzbfANqRC276aHKE%2BRpYf8FQalOKR4%2BnsjyguEBBJ8yZKPL2olUA4uy6vl8%2B6py%2B7y%2FpIPLIEZitUvyR1L10SPyTo3PTQt5YGpEYOdVCoA0RejLLDqqufZ4OJuTAg2orVH0oD%2FFvrDCfsqydxhubPa4RfDtMdogngdkZ%2FOF%2BfvjJk4gHcoG01LLrBeQQYT8XK9t7aVqezGECx1fZpJHj7ZT%2BlrEpAyOVUgtefrsXHFLSCFYLzHctAGY0ikWs23SQTgx6RsQRH%2FWpBMz7qffrMprmT8T%2Fq7v5DD43p7Ia0gQN6S2HwN1kvdhH2jQtTc1U%2FI5q9yJAaiLH4kBCY99MrIzT0b%2BpGEh2iQ4%2FF78B6QKSvrVM0E29080kbk74N2jz7usyg66xDWVeE0KwD03ZjbOd8Ce%2BaMkFf8xlmhGEu13VpTZIPdt8A7lKnK5RxI8bY6FMZtOsvz2gwzhvfZY2N66%2B9jGhcUmb77TQ7Jmd9NtjwkYoohM79UcjNF9O5WkhzZo%2BEC1jN%2FG1IsnwvZ22OVgHJiOyk3PCperrbvcdco0zj0y71jX3WbsCrzDEZ9yiVoi%2FPZMKn3kNsF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20180803T113240Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAYZH6E2YFMLOYJGAJ%2F20180803%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=6da0466f949f1c0915e5f53ac4f82a2cb466f81eece20827ab4e8bad384b5b60'}} initWidth={280} initHeight={55} />
            </View>
            <View style={[styles.imageContainer, { borderLeftWidth: 1, borderLeftColor: colors.white }]}>
                <ResponsiveImage style={{resizeMode: 'stretch'}}  source={require('images/green-idea-white.png')} initWidth={50} initHeight={72} />
            </View>
        </View>

        <View style={{ flex: 0.7, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'blue',}}>

            <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>O Descarte Verde</Text>
                    <Text style={styles.description}>
                        O Descarte Verde é um serviço oferecido pelo Grupo Green Idea. O Descarte verde te auxilia na busca pelos pontos de reciclagem mais próximos a você! O Descarte Verde é uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.
                    </Text>
                </View>
            </View>

            <View style={styles.cardContainer}>
                <Text style={styles.description}>
                    O Descarte Verde foi desenvolvido por alunos da UVV (Universidade de Vila Velha), com integrantes de cursos de Sistemas de Informação, Markerting, Engenharia e Psicologia.
                </Text>
            </View>
        </View>
    </LinearGradient>
);

Sobre.navigationOptions = {
    header: null,
    swipeEnabled: false,
    tabBarIcon: ({ tintColor }) => <Ionicons name="ios-information-circle" size={(Platform.OS === 'ios') ? 18 : 20} color={tintColor} />
}

export default Sobre;
