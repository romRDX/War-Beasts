import React from 'react';

import { Conteiner } from './styles';

const OpcaoTribo = ( props ) => (
        <Conteiner onClick={() => props.func(props.tribo) }>
                <h2>{props.tribo.nome}</h2>
        </Conteiner>
);

export default OpcaoTribo;
