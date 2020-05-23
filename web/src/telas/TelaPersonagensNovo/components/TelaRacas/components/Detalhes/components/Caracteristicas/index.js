import React from 'react';

import { Container } from './styles';
import Atributos from './components/Atributos';
import Habilidades from './components/Habilidades';

const Caracteristicas = ( props ) => (
    <Container>
        
            <>
                <Atributos />
                <Habilidades  />
            </>
        
    </Container>
);

export default Caracteristicas;
