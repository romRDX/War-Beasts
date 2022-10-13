import React, { useContext } from 'react';

import { Container } from './styles';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';

const Info = () => {
    const { itemSelecionado } = useContext(ItemsPersonagemContext);
    return (
        <Container>
            { itemSelecionado && 
                <>
                    <h1>{ itemSelecionado.name }</h1>
                    <p>STR: {itemSelecionado.STR}</p>
                    <p>DEX: {itemSelecionado.DEX}</p>
                    <p>CON: {itemSelecionado.CON}</p>
                    <p>AGI: {itemSelecionado.AGI}</p>
                    <p>INT: {itemSelecionado.INT}</p>
                    <p>TOU: {itemSelecionado.TOU}</p>
                    <p>Description:</p>
                    <p>{itemSelecionado.description}</p>
                </>
            }            
        </Container>
    )
    
};

export default Info;