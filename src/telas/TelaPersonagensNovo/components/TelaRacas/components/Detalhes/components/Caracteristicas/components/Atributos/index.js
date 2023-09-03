import React, { useContext } from 'react';

import { Container } from './styles';
import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';

const Atributos = () => {
    const { selectedClass } = useContext(raceContext)

    return (
        <Container>
        { selectedClass && <>
            <h2>STR: {selectedClass.attributes.STR}</h2>
            <h2>DEX: {selectedClass.attributes.DEX}</h2>
            <h2>INT: {selectedClass.attributes.INT}</h2>
            <h2>CON: {selectedClass.attributes.CON}</h2>
            <h2>TOU: {selectedClass.attributes.TOU}</h2>
            <h2>AGI: {selectedClass.attributes.AGI}</h2>
            </>
        }
        </Container>
    )
    
};

export default Atributos;
