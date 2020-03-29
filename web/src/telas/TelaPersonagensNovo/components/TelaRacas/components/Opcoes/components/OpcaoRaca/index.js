import React, { useContext } from 'react'
import { connect } from 'react-redux';

import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

import { Conteiner } from './styles.js';

const Miniaturas = ( props ) => {
    const { selecionarRaca } = useContext(RacaContext)

    return (
        <Conteiner onClick={ () => selecionarRaca(props.raca) }>
            <h2>{props.raca.nome}</h2>
        </Conteiner>
    );
        
};

export default connect( state => ({ characters: state.characters }))(Miniaturas);
