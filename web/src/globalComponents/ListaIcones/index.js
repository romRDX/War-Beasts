import React, { useContext } from 'react';

import { Dado } from './styles';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';

const ListaIcones = ({dados}) => {

    const { setItemSelecionado, itemSelecionado } = useContext(ItemsPersonagemContext);

    return (
       dados ? dados.map( dado => (
            <Dado key={dado.name} icon={ dado.icon } onClick={ () => setItemSelecionado(dado) } isSelected={itemSelecionado?.id === dado.id} />
        ))
        : 
        <></>
    )
};

export default ListaIcones;