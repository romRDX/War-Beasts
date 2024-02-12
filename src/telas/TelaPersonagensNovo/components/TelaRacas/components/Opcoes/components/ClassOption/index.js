import React, { useContext } from 'react'

import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';

import { Container } from './styles.js';

const Miniaturas = ({ classData }) => {
    const { setSelectedClass, selectedClass } = useContext(raceContext);
    
    return (
        <Container isSelected={classData.id == selectedClass.id} onClick={ () => setSelectedClass(classData) }>
            <img src={classData.portrait} />
            <h2>{classData.name}</h2>
        </Container>
    );
};

export default Miniaturas;
