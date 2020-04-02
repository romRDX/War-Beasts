import React from 'react';
import { Link } from 'react-router-dom';

import { Botao } from './styles';

const BotaoVoltar = (props) => {


    return (
        <Botao>
            { props.text }
        </Botao>
    )
};

export default BotaoVoltar;