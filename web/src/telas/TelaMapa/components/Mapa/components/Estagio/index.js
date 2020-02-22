import React from 'react';

import { Box } from './styles';

const Estagio = (props) => {

    const selecionado = () => {
        return ( props.selected.nome === props.est.nome ) ? 'red' : 'white';
    }

    return (
        <Box posicao={props.est.posicao} onClick={ () => props.func(props.est) }  cor={ selecionado.bind(this) }/>
    )
}

export default Estagio
