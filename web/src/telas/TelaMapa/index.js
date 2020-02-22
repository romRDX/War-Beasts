import React, { useState, useEffect } from 'react'

import Mapa from './components/Mapa';
import Detalhes from './components/Detalhes';

import { Box } from './styles';

const TelaMapa = (props) => {

    const [ selected, setSelected ] = useState('');

    useEffect( ()=> {

        return () => {

        };

    }, [selected]);

    function selecionar(est){
        setSelected(est);
    };
    
    return (
        <Box>
            <Detalhes info={ selected } />
            <Mapa func={selecionar.bind(this)} selected={selected} />
        </Box>
    )
    
};

export default TelaMapa;