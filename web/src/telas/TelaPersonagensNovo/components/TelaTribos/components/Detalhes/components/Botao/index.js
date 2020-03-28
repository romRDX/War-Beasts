import React from 'react'

import { Conteiner } from './styles.js';

const Detalhes = ( props ) => (
    <Conteiner onClick={ () => props.func(props.tribo) }>
        botão
    </Conteiner>
);

export default Detalhes;
