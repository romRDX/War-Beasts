import React, { useContext, useCallback } from 'react';

import { Box } from './styles';
import MapaContext from 'telas/TelaMapa/context/MapaContext';

const Estagio = ({estagio}) => {
    const { estagioSelecionado, selecionarEstagio } = useContext(MapaContext);

    const selecionado = useCallback( () => {
        return ( estagioSelecionado.nome === estagio.nome ) ? 'red' : 'white';
    },[estagioSelecionado, estagio]);

    return (
        <Box posicao={estagio.posicao} onClick={ () => selecionarEstagio(estagio) }  cor={ selecionado }/>
    )
}

export default Estagio
