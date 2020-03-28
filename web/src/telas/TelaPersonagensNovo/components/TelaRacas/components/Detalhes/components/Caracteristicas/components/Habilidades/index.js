import React from 'react';

import { Conteiner, Nome, Botao } from './styles';

const Habilidades = ( props ) => (
    <Conteiner>
        <div>{ props.hab && props.hab.ativas[0].nome}</div>
    </Conteiner>
);

export default Habilidades;
