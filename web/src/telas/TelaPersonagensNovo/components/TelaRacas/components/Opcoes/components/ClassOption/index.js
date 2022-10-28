import React, { useContext } from 'react'

import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';

import { Container } from './styles.js';

const Miniaturas = ({ classData }) => {
    const { setSelectedClass } = useContext(raceContext);
    return (
        <Container onClick={ () => setSelectedClass(classData) }>
            <h2>{classData && classData.name}</h2>
        </Container>
    );
};

export default Miniaturas;
