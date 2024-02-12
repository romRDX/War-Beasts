import React, { useContext } from 'react';

import { Container } from './styles';
import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';

const OpcaoTribo = ( {race} ) => {
        const { selectRace, selectedRace } = useContext(raceContext);

        return (
                <Container isSelected={selectedRace.id == race.id} onClick={() => selectRace(race) }>
                        <img src={race.icon} />
                        <h2>{race.name}</h2>
                </Container>
        )
};

export default OpcaoTribo;
