import React, {Component} from 'react';

export default class Hor extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return(
        <div className="col-md-6">
            <div className="feature feature--featured feature-1 boxed boxed--border bg--white">
                <h5>{this.props.title}</h5>
                <p className="hor">
                    {this.props.desc}
                </p>
                <a href={this.props.link}>
                    Visualizar
                </a>
            </div>
         </div>
      )
    }
}
