import React, { useContext } from 'react';

import ClassOption from './components/ClassOption';

import { Container } from './styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/raceContext';

const Opcoes = ({ classes }) => {
        return (
                <Container>
                {
                        classes.map( classData => (
                                <ClassOption key={classData.nome} classData={classData} />
                        ))
                }
                </Container>
        )
        
};

export default Opcoes;