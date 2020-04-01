import React, { useContext } from 'react';

import { Box, Cenario, Info } from './styles';

import MapasContext from 'telas/TelaMapas/context/MapasContext';

const Mapa = (props) => {
    const { selecionarMapa } = useContext(MapasContext);

    return (
        <Box onClick={ () => selecionarMapa(props.mapa)}>
            <Cenario />
            <Info>
                <h1>{props.mapa.nome}</h1>
            
            </Info>
        </Box>
    )

}

export default Mapa;
 