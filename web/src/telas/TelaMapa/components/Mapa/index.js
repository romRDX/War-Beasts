import React from 'react';

import Estagio from './components/Estagio';

import { connect } from 'react-redux';

import { Background } from './styles.js';

const Mapa = (props) => {

    return (
        <Background>
            {
                props.map.estagios.map( est => (
                    <Estagio key={est.nome} est={est} func={ props.func } selected={props.selected} />
                ))
            }
        </Background>
    ) 
}

export default connect( state => ({ map: state.activeMap }) )(Mapa);