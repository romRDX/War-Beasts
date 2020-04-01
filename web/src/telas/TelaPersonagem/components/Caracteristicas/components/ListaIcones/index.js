import React from 'react';

import { Conteiner , Dado} from './styles';

const ListaIcones = (props) => (
<Conteiner onClick={ () => props.page() }>
    {
        props.dados.map( dado => (
            <Dado key={dado.nome} icone={ dado.icone } />
        ))
    }
    </Conteiner>                        
);

export default ListaIcones;