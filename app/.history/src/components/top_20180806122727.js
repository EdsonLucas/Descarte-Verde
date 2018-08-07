import React, {Component} from 'react';
import { View, Text } from 'react-native';
import { general, metrics, colors } from 'styles';


export default class Hor extends Component {

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
