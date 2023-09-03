import React, { useContext } from 'react';

import { Container } from './styles';
import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';

const OpcaoTribo = ( {race} ) => {
        const { selectRace } = useContext(raceContext);

        return (
                <Container onClick={() => selectRace(race) }>
                        <h2>{race.name}</h2>
                </Container>
        )
};

export default OpcaoTribo;
