import React from 'react';
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';
import ListaIcones from './components/ListaIcones';

const Tracos = (props) => {

    return (
        <Conteiner>
            <ListaIcones dados={props.tracos} />
        </Conteiner>
    ) 
}

export default connect( state => ({ tracos: state.activeCharacter.tracos }))(Tracos);