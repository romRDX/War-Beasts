import React from 'react'

import { Box } from './styles';
import Items from './components/Items';
import Passivas from './components/Passivas';
import Skills from './components/Skills';

const Habilidades = (props) => (
    <Box>
        <Skills />
        <Items />
        <Passivas />
    </Box>
);

export default Habilidades;