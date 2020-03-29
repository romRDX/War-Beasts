import React from 'react';

import Estagio from './components/Estagio';

import { connect } from 'react-redux';

import { Background } from './styles.js';

const Mapa = (props) => {

    return (
        <Background>
            {
                props.activeMap.estagios.map( est => (
                    <Estagio key={est.nome} est={est} />
                ))
            }
        </Background>
    ) 
}

export default connect( state => ({ activeMap: state.activeMap }) )(Mapa);