import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';

import Mapa from './components/Mapa';
import Detalhes from './components/Detalhes';

import { Conteiner } from './styles';
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
        <Conteiner>
            <BotaoVoltar ><Link  to="/mapas">Voltar</Link></BotaoVoltar>
            <MapaContext.Provider value={{ selecionarEstagio, estagio }}>
                <Detalhes info={ estagio } />
                <Mapa />
            </MapaContext.Provider>
            
        </Conteiner>
    )
    
};

export default TelaMapa;