import React, { Component } from 'react'

import Personagem from './components/Personagem';

export default class index extends Component {
    render() {
        return (
            <>  
                {this.props.slc && <Personagem char={this.props.slc} /> }
            </>
        )
    }
}


