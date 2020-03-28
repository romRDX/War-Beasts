import React from 'react';

import { Conteiner, Nome, Botao } from './styles';

const Atributos = ( props ) => (
    <Conteiner>
        <h2>STR: {props.atri.STR}</h2>
        <h2>DEX: {props.atri.DEX}</h2>
        <h2>INT: {props.atri.INT}</h2>
        <h2>CON: {props.atri.CON}</h2>
        <h2>TOU: {props.atri.TOU}</h2>
        <h2>AGI: {props.atri.AGI}</h2>
    </Conteiner>
);

export default Atributos;
