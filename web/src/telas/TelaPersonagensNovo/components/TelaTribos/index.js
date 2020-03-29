import React from 'react';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import { Conteiner } from './styles.js';

const TelaTribos = ( props ) => (
    <Conteiner>
        <Detalhes func={props.confirmar} />
        <Opcoes />
    </Conteiner>
);

export default TelaTribos;
