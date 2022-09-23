import React, { useContext } from 'react'
import { connect } from 'react-redux';

import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

import { Container } from './styles.js';

const Miniaturas = ({ raca }) => {
    const { selecionarRaca } = useContext(RacaContext);

    return (
        <Container onClick={ () => selecionarRaca(raca) }>
            <h2>{raca && raca.nome}</h2>
        </Container>
    );
};

export default Miniaturas;
