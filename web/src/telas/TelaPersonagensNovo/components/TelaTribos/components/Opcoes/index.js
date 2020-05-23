import React from 'react';

import { Container } from './styles';

import tribos from 'Data/Tribos';

import OpcaoTribo from './components/OpcaoTribo';

const Opcoes = () => {
        return (
                <Container>
                        {   
                                tribos.map( tribo => (
                                        <OpcaoTribo tribo={tribo}  key={tribo.nome} />
                                ))
                        }
                </Container>
        )
};

export default Opcoes;
