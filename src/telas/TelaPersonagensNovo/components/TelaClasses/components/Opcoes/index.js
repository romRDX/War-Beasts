import React, { useEffect, useState } from 'react';
import { apiWB } from 'services/axios';
import { Container, OptionsContainer, Title } from './styles';

import RaceOption from './components/RaceOption';

const Opcoes = ({ title }) => {
        
        const [races, setRaces] = useState();
        
        useEffect(() => {
                apiWB.get("/races").then((resp) => {
                setRaces(resp.data.races);
                });
        }, [])

        return (
                <Container>
                        <Title>
                                <h1>{title}</h1>
                                <p>Veja detalhes da Tribo escolhida ao lado</p>
                        </Title>
                        <OptionsContainer>
                                {   
                                        races && races.map( race => (
                                                <RaceOption race={race}  key={race.name} />
                                        ))
                                }
                        </OptionsContainer>
                </Container>
        )
};

export default Opcoes;
