import React, { useState, useEffect } from 'react';

import Mapa from './Components/Mapa';

import { Mapas, Tokens } from './styles';
import { apiWB } from 'services/axios';

const MapaEstagios = () => {

    const [maps, setMaps] = useState(null);

    useEffect(() => {
        apiWB.get("/maps").then((resp) => {
            console.log("MAPAS: ", resp);
            if(resp.data.maps){
                setMaps(resp.data.maps);
            }
        });
    }, []);
    
    return (
        <Mapas>
            <Tokens>{ 5 }</Tokens>
            {
                
                maps?.map( map => (
                    <Mapa key={map.id} mapa={map} />
                ))
            }
        </Mapas>
    )
}

export default MapaEstagios;