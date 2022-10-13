import React from 'react';

import { Dado } from './styles';

const ListaIcones = ({dados, selecionar}) => {
    console.log("DAD: ", dados);
    return (
       dados && dados.map( dado => (
            <Dado key={dado.name} icon={ dado.icon } onClick={ () => selecionar && selecionar(dado) } />
        ))
    )
};

export default ListaIcones;