import React from 'react';
import { Container } from './styles';
import { connect } from 'react-redux';

import { Modelo } from './styles'

const index = ({player}) => {
   
    return (
        <Container>
            <Modelo img={player.modelo} />
        </Container>
    )
}

export default connect( state => ({ player: state.activeCharacter }))(index);
