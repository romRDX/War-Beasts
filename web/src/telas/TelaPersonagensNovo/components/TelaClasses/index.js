import React from 'react';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import { Container } from './styles.js';

const TelaTribos = ( props ) => (
    <Container>
        <Detalhes func={props.confirmarTribo} />
        <Opcoes />
    </Container>
);

export default TelaTribos;
