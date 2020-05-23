import React from 'react';
import { connect } from 'react-redux';

import { Container } from './styles.js';

const Habilidades = (props) => {

    return (
        <Container>
            
        </Container>
    ) 
}

export default connect( state => ({ habilidades: state.activeCharacter.habilidades }))(Habilidades);