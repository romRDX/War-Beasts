import React from 'react';
import { Link } from 'react-router-dom';

import { Info } from './styles.js';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import Atributos from './components/Atributos';
import Detalhes from './components/Detalhes';
import Portrait from './components/Portrait';
import Caracteristicas from './components/Caracteristicas';

const TelaPersonagem = (props) => {   
    
    return (
        <Info>
            <BotaoVoltar ><Link  to="/principal">Voltar</Link></BotaoVoltar>
            <Portrait />
            <Detalhes />
            <Atributos />
            <Caracteristicas />
        </Info>
    )
};


export default TelaPersonagem;