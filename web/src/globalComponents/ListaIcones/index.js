import React from 'react';

import { Dado} from './styles';

const ListaIcones = ({dados, selecionar}) => (
    <>
    {
       dados && dados.map( dado => (
            <Dado key={dado.nome} icone={ dado.icone } onClick={ () => selecionar && selecionar(dado) } />
        ))
    }
    </>                     
);

export default ListaIcones;