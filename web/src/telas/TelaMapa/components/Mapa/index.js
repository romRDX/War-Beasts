import React from 'react';

import Estagio from './components/Estagio';

import { connect } from 'react-redux';

import { Background } from './styles.js';

const Mapa = ({activeMap}) => {

    return (
        <Background>
            {
                activeMap.estagios.map( estagio => (
                    <Estagio key={estagio.nome} estagio={estagio} />
                ))
            }
        </Background>
    ) 
}

export default connect( state => ({ activeMap: state.activeMap }) )(Mapa);