import React from 'react';
import { Link } from 'react-router-dom';

import { Info } from './styles.js';

import Atributos from './components/Atributos';
import Detalhes from './components/Detalhes';
import Portrait from './components/Portrait';
import Habilidades from './components/Habilidades';

const TelaPersonagem = (props) => (    
    <Info>
        <Link className="voltar" to="/principal">Voltar</Link>
        <Portrait />
        <Detalhes />
        <Atributos />
        <Habilidades />
    </Info>
);


export default TelaPersonagem;