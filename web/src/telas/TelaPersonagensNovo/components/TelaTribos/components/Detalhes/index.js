import React from 'react'

import { Conteiner } from './styles.js';

import Logo from './components/Logo';
import Descricao from './components/Descricao';
import Botao from './components/Botao';

const Detalhes = ( props ) => (
    <Conteiner>
    <h1>{ props.selecionada.nome }</h1>
        <Logo />
    
        <Descricao descricao={ props.selecionada.descricao} />
        <Botao func={props.func} tribo={props.selecionada} />
    </Conteiner>
);

export default Detalhes;
