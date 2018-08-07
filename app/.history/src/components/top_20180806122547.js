import React, {Component} from 'react';

export default class Hor extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <View style={styles.topoContainer}>
            <Text style={styles.topoTitle}>{this.props.title}</Text>
        </View>
      )
    }
}
