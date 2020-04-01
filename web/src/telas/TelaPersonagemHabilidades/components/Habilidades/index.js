import React, { useState } from 'react';

import Lista from './components/Lista';
import Equipadas from './components/Equipadas';

import { Conteiner } from './styles.js';

const Habilidades = (props) => {

    return (
        <Conteiner>
            <Lista />
            <Equipadas />
        </Conteiner>
    ) 
}

export default Habilidades;