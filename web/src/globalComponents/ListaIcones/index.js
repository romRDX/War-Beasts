import React from 'react';

import { Conteiner , Dado} from './styles';

const ListaIcones = (props) => (
    <>
    {
        props.dados.map( dado => (
            <Dado key={dado.nome} icone={ dado.icone } onClick={ () => props.selecionar && props.selecionar(dado) } />
        ))
    }
    </>                     
);

export default ListaIcones;