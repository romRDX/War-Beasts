import React, { useState, useEffect } from 'react';

import MapasContext from './context/MapasContext';

import Mapas from './components/Mapas';
import Detalhes from './components/Detalhes';

import { Conteiner } from './styles';

const TelaMapas = (props) => {

    const [ selected, setSelected ] = useState('');

    useEffect( ()=> {

        return () => {

        };

    }, [selected]);

    function selecionarMapa(est){
        setSelected(est);
    };
    
    return (
        <Conteiner>
            <MapasContext.Provider value={{ selecionarMapa }}>
                <Detalhes info={ selected } />
                <Mapas />
            </MapasContext.Provider>
        </Conteiner>
    )
    
};

export default TelaMapas;