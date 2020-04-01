import React from 'react';
import { Link } from 'react-router-dom';

import { Info } from './styles.js';

import Atributos from './components/Atributos';
import Detalhes from './components/Detalhes';
import Portrait from './components/Portrait';
import Caracteristicas from './components/Caracteristicas';

const TelaPersonagem = (props) => {   
    
    return (
        <Info>
            <Link className="voltar" to="/principal">Voltar</Link>
            <Portrait />
            <Detalhes />
            <Atributos />
            <Caracteristicas />
        </Info>
    )
};


export default TelaPersonagem;