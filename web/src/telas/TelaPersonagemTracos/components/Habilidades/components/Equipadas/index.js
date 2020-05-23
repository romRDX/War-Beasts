import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import TracosPersonagemContext from 'telas/TelaPersonagemTracos/context/TracosPersonagemContext';

const Tracos = (props) => {
    const { setTracoSelecionado } = useContext(TracosPersonagemContext);

    return (
        <Container>
            <ListaIcones dados={props.tracos} selecionar={ setTracoSelecionado } />
        </Container>
    ) 
}

export default connect( state => ({ tracos: state.activeCharacter.tracos }))(Tracos);