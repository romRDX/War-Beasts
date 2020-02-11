import React, { useState, useEffect } from 'react';

import { Selecao } from "./styles.js";
import Miniaturas from './components/Miniaturas';
import PersonagemInfo from './components/PersonagemInfo';

export default function TelaPersonagens(props) {
    const [ selected, setSelected ] = useState('');

    function test(select) {
        setSelected(select);
    }

    useEffect( ()=> {

        return () => {

        };

    }, [selected]);

    return (
        <Selecao>
            <Miniaturas func={test.bind(this)}/>
            <PersonagemInfo slc={selected}/>
        </Selecao>
    )

}