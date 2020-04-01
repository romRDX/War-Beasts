import React, { useContext } from 'react';

import { Conteiner , Dado} from './styles';
import ItemsPersonagemContext from 'telas/TelaPersonagemItems/context/ItemsPersonagemContext';

const ListaIcones = (props) => {
    const { setItemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Conteiner>
        {
            props.dados.map( dado => (
                <Dado key={dado.nome} icone={ dado.icone } onClick={ () => setItemSelecionado(dado) } />
            ))
        }
        </Conteiner>   
    )
                         
};

export default ListaIcones;