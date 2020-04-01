import React from 'react';
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';
import ListaIcones from './components/ListaIcones';

const Habilidades = (props) => {

    return (
        <Conteiner>
            <ListaIcones dados={props.habilidades} />
        </Conteiner>
    ) 
}

export default connect( state => ({ habilidades: state.activeCharacter.habilidades }))(Habilidades);