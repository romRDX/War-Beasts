import React from 'react';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import { Conteiner } from './styles.js';

const TelaTribos = ( props ) => (
    <Conteiner>
        <Detalhes selecionada={props.tribo} func={props.confirmar} />
        <Opcoes func={props.selecionar} />
    </Conteiner>
);

export default TelaTribos;
