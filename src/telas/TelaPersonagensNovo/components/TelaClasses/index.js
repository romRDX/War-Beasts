import React from 'react';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import { Container } from './styles.js';

const TelaTribos = ( props ) => (
    <Container>
        
        <Opcoes title={"Escolha uma raça para seu personagem: "} />
        <Detalhes func={props.confirmarTribo} />
    </Container>
);

export default TelaTribos;
