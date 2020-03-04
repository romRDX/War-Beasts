import React from 'react';
import { connect } from 'react-redux';

import mapas from 'Data/Mapas';

import Mapa from './Components/Mapa';

import { Mapas, Tokens } from './styles';

const mapaEstagios = (props) => {
    
    return (
        <Mapas>
            <Tokens>{ props.mapProgress.tokens }</Tokens>
            {
                
                mapas.map( mapa => (
                    <Mapa key={mapa.nome} func={props.func} mapa={mapa} />
                ))
            }
        </Mapas>
    )
}

export default connect( state => ({ mapProgress: state.mapProgress }))(mapaEstagios);