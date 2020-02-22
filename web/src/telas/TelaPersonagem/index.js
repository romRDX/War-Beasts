import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Info } from './styles.js';

import Atributos from './components/Atributos';
import Detalhes from './components/Detalhes';
import Portrait from './components/Portrait';
import Habilidades from './components/Habilidades';

const TelaPersonagem = (props) => (    
   
    <Info>
        <Link className="voltar" to="/principal">Voltar</Link>
        <Portrait />
        <Detalhes character={props.character} />
        <Atributos character={props.character} />
        <Habilidades />
    </Info>
   
);


export default connect( state => ({ character: state.activeCharacter }))(TelaPersonagem);

// state.activeCharacter // state.characters[0]   MUDAR DE VOLTA DEPOIS

// <Link to="/main">Voltar</Link>
//                 <h1>{props.character.nome}</h1>