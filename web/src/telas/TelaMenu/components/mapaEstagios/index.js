import React, { Component } from 'react';

import mapas from 'Data/Mapas';

import Estagio from './components/Estagio';

import { Estagios } from './styles';

export default class mapaEstagios extends Component {
    render() {
        return (
            <Estagios>
                {
                    
                    mapas.map( mapa => (
                        <Estagio  key={mapa.nome} est={mapa} />
                    ))
                }
            </Estagios>
        )
    }
}
