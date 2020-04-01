import React from 'react';
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';
import ListaIcones from './components/ListaIcones';

const Tracos = (props) => {

    return (
        <Conteiner>
            <ListaIcones dados={props.items} />
        </Conteiner>
    ) 
}

export default connect( state => ({ items: state.activeCharacter.items }))(Tracos);