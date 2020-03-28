import React from 'react'
import { connect } from 'react-redux';

import { Conteiner } from './styles.js';

const Miniaturas = ( props ) => (
        <Conteiner onClick={ () => props.func(props.raca) }>
            <h2>{props.raca.nome}</h2>
        </Conteiner>
);

export default connect( state => ({ characters: state.characters }))(Miniaturas);
