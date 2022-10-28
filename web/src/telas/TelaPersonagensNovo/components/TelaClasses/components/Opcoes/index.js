import React, { useEffect, useState } from 'react';
import { apiWB } from 'services/axios';
import { Container } from './styles';

import RaceOption from './components/RaceOption';

const Opcoes = () => {
        
        const [races, setRaces] = useState();
        
        useEffect(() => {
                apiWB.get("/races").then((resp) => {
                setRaces(resp.data.races);
                });
        }, [])

        return (
                <Container>
                        {   
                                races && races.map( race => (
                                        <RaceOption race={race}  key={race.name} />
                                ))
                        }
                </Container>
        )
};

export default Opcoes;
