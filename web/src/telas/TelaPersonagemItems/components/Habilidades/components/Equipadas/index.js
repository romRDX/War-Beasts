import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Container } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';

const Tracos = (props) => {
    const { setItemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Container>
            <ListaIcones dados={props.items} selecionar={ setItemSelecionado } />
        </Container>
    ) 
}

export default connect( state => ({ items: state.activeCharacter.items }))(Tracos);