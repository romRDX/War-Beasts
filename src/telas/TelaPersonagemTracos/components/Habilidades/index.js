import React, { useState } from 'react';

import Lista from './components/Lista';
import Equipadas from './components/Equipadas';

import { Container } from './styles.js';

const Tracos = () => {

    return (
        <Container>
            <Lista />
            <Equipadas />
        </Container>
    ) 
}

export default Tracos;