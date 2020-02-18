import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Mapa from './components/Mapa';
import Detalhes from './components/Detalhes';

import { Box } from './styles';

export default class TelaMapa extends Component {
    render() {
        return (
            <Box>
                <Detalhes />
                <Mapa />
            </Box>
        )
    }
};