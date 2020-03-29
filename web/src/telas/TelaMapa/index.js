import React, { useState, useEffect } from 'react'

import Mapa from './components/Mapa';
import Detalhes from './components/Detalhes';

import { Box } from './styles';
import MapaContext from 'telas/TelaMapa/context/MapaContext';

const TelaMapa = (props) => {

    const [ estagio, setEstagio ] = useState('');

    useEffect( ()=> {

        return () => {

        };

    }, [estagio]);

    function selecionarEstagio(est){
        setEstagio(est);
    };
    
    return (
        <Box>
            <MapaContext.Provider value={{ selecionarEstagio, estagio }}>
                <Detalhes info={ estagio } />
                <Mapa />
            </MapaContext.Provider>
            
        </Box>
    )
    
};

export default TelaMapa;