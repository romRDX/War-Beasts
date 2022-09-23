import React, { useEffect } from 'react';
import { apiWB } from 'services/axios';
import { Container } from './styles';

// import tribos from 'Data/Tribos';

import OpcaoTribo from './components/OpcaoTribo';
import { useState } from 'react';

const Opcoes = () => {
        
        const[tribos, setTribos] = useState([]);

        useEffect(() => {
                apiWB.get("/tribes").then((resp)=> {
                        setTribos(resp.data.tribes);
                });        
        }, []);

        return (
                <Container>
                        {   
                                tribos && tribos.map( tribo => (
                                        <OpcaoTribo tribo={tribo}  key={tribo.nome} />
                                ))
                        }
                </Container>
        )
};

export default Opcoes;
