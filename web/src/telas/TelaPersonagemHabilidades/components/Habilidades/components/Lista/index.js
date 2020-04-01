import React from 'react';
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';

const Habilidades = (props) => {

    return (
        <Conteiner>
            
        </Conteiner>
    ) 
}

export default connect( state => ({ habilidades: state.activeCharacter.habilidades }))(Habilidades);