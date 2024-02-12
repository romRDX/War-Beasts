import React, { useContext } from 'react';

import ClassOption from './components/ClassOption';

import { Container, OptionsContainer, Title } from './styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/raceContext';

const Opcoes = ({ classes, title }) => {
        return (
                <Container>
                        <Title>
                                <h1>{title}</h1>
                                <p>Veja detalhes da Raça escolhida ao lado</p>
                        </Title>
                        <OptionsContainer>
                                {
                                        classes.map( classData => (
                                                <ClassOption key={classData.nome} classData={classData} />
                                        ))
                                }
                        </OptionsContainer>
                </Container>
        )
        
};

export default Opcoes;