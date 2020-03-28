import React, { useState, useEffect } from 'react';

import TelaRacas from './components/TelaRacas';
import TelaTribos from './components/TelaTribos';
import { Conteiner } from "./styles.js";

const TelaPersonagensNovo = (props) => {
    const [ tribo, setTribo ] = useState('');
    const [ selecionada , setSelecionada] = useState('');

    const selecionarTribo = (select) => {
        setSelecionada(select);
    }

    const confirmarTribo = (select) => {
        setTribo(select);
    }

    useEffect( ()=> {

        return () => {

        };

    }, [tribo]);

    return (
        <Conteiner>
            {
                tribo ? 
                    <TelaRacas tribo={tribo} /> :
                    <TelaTribos 
                        tribo={selecionada}
                        confirmar={confirmarTribo.bind(this)}
                        selecionar={selecionarTribo.bind(this)} 
                    />
            }
        </Conteiner>
    )

}

export default TelaPersonagensNovo;