import React, { useContext } from 'react';

import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

import NomePersonagem from './components/NomePersonagem';
import CriarPersonagem from './components/CriarPersonagem';
import Caracteristicas from './components/Caracteristicas';

import { Container, Container_2 , Descricao } from './styles';

const Detalhes = ( props ) => {
    const { raca } = useContext(RacaContext);

    return (
        <Container>
            <Descricao>
                { raca && raca.nome }
            </Descricao>
            <Caracteristicas />
            <Container_2>
                <NomePersonagem />
                <CriarPersonagem />
            </Container_2>
        </Container>
    );
};

export default Detalhes;