import React, { useState, useEffect } from 'react'

import Mapas from './components/Mapas'
import Detalhes from './components/Detalhes';

import { Conteiner } from './styles';

 const TelaMapas = (props) => {

    const [ selected, setSelected ] = useState('');

    useEffect( ()=> {

        return () => {

        };

    }, [selected]);

    function selecionar(est){
        setSelected(est);
    };
    
    return (
        <Conteiner>
            <Detalhes info={ selected } />
            <Mapas func={selecionar.bind(this)} />
        </Conteiner>
    )
    
};

export default TelaMapas;