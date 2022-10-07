import React, { useContext } from 'react';

import OpcaoRaca from './components/OpcaoRaca';

import { Container } from './styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext';

const Opcoes = () => {
        const { tribo } = useContext(TriboContext)

        return (
                <Container>
                {
                        tribo.racas.map( raca => (
                                <OpcaoRaca key={raca.nome} raca={raca } />
                        ))
                }
                </Container>
        )
        
};

export default Opcoes;