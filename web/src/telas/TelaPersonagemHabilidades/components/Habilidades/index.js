import React, { useState } from 'react';

import Lista from './components/Lista';
import Equipadas from './components/Equipadas';

import { Container } from './styles.js';

const Habilidades = (props) => {

    return (
        <Container>
            <Lista />
            <Equipadas />
        </Container>
    ) 
}

export default Habilidades;