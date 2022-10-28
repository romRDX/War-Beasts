import React from 'react';

import Detalhes from './components/Detalhes';
import Opcoes from './components/Opcoes';

import { Container } from './styles.js';
import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';
import { useContext } from 'react';

const TelaRacas = () => {

    const { selectedRace } = useContext(raceContext);

    return (
        <Container>
            <Detalhes />
            <Opcoes classes={selectedRace.classes} />
        </Container>
    )
};

export default TelaRacas;
