import React, { useContext } from 'react';
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';
import ListaIcones from 'globalComponents/ListaIcones';

import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';

const Tracos = (props) => {
    const { setItemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Conteiner>
            <ListaIcones dados={props.items} selecionar={ setItemSelecionado } />
        </Conteiner>
    ) 
}

export default connect( state => ({ items: state.activeCharacter.items }))(Tracos);