import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';


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
