import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
        topoContainer: {
        backgroundColor: colors.transparent,
        marginTop: (Platform.OS === 'ios') ? 24 : 0,
    },

    topoTitle: {
        textAlign: 'center',
        flexGrow: 1,
        color: colors.white,
        padding: metrics.basePadding,
    },
})


export default class Topo extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <View style={general.topoContainer}>
            <Text style={general.topoTitle}>{this.props.title}</Text>
        </View>
      )
    }
}
