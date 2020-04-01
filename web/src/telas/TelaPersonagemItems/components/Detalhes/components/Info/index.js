import React, { useContext } from 'react';

import { Conteiner } from './styles';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';


const Info = (props) => {
    const { itemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Conteiner>
            { itemSelecionado.nome && <h1>{ itemSelecionado.nome }</h1> }
                
                
            
        </Conteiner>
    )
    
};

export default Info;