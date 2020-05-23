import React, { useContext } from 'react'
import { connect } from 'react-redux';

import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

import { Container } from './styles.js';

const Miniaturas = ( props ) => {
    const { selecionarRaca } = useContext(RacaContext)

    return (
        <Container onClick={ () => selecionarRaca(props.raca) }>
            <h2>{props.raca.nome}</h2>
        </Container>
    );
        
};

export default connect( state => ({ characters: state.characters }))(Miniaturas);
