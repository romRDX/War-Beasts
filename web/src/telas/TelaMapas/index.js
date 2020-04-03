import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles.js';

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

    const buttonStyle = {
        margin: 'auto',
        pos: [0,0 ],
    }
    
    return (
        <Conteiner>
            <BotaoVoltar theme={ buttonStyle } ><Link  to="/principal">Voltar</Link></BotaoVoltar>
            <MapasContext.Provider value={{ selecionarMapa }}>
                <Detalhes info={ selected } />
                <Mapas />
            </MapasContext.Provider>
        </Conteiner>
    )
    
};

export default TelaMapas;