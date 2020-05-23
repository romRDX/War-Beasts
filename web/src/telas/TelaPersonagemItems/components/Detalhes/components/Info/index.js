import React, { useContext } from 'react';

import { Container } from './styles';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';


const Info = (props) => {
    const { itemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Container>
            { itemSelecionado.nome && <h1>{ itemSelecionado.nome }</h1> }
                
                
            
        </Container>
    )
    
};

export default Info;