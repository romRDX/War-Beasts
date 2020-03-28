import React from 'react';

import mapas from 'Data/Mapas';

import Estagio from './components/Estagio';

import { Estagios } from './styles';

 const MapaEstagios = () => {
    
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

export default MapaEstagios