import React, { Component } from 'react';

import { Box } from './styles';

export default class Estagio extends Component {
    render() {
        return (
            <Box cor={'red'} posicao={this.props.est.posicao} >
            </Box>
        )
    }
}
