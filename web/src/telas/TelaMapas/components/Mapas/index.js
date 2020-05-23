import React from 'react';
import { connect } from 'react-redux';

import mapas from 'Data/Mapas';

import Mapa from './Components/Mapa';

import { Mapas, Tokens } from './styles';

const mapaEstagios = ({mapProgress}) => {
    
    return (
        <Mapas>
            <Tokens>{ mapProgress.tokens }</Tokens>
            {
                
                mapas.map( mapa => (
                    <Mapa key={mapa.nome} mapa={mapa} />
                ))
            }
        </Mapas>
    )
}

export default connect( state => ({ mapProgress: state.mapProgress }))(mapaEstagios);