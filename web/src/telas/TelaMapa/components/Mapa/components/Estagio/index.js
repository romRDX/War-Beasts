import React, { useContext } from 'react';

import { Box } from './styles';
import MapaContext from 'telas/TelaMapa/context/MapaContext';

const Estagio = (props) => {
    const { estagio, selecionarEstagio } = useContext(MapaContext);

    const selecionado = () => {
        return ( estagio.nome === props.est.nome ) ? 'red' : 'white';
    }

    return (
        <Box posicao={props.est.posicao} onClick={ () => selecionarEstagio(props.est) }  cor={ selecionado }/>
    )
}

export default Estagio
