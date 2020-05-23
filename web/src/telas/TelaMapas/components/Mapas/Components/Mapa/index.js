import React, { useContext } from 'react';

import { Box, Cenario, Info } from './styles';

import MapasContext from 'telas/TelaMapas/context/MapasContext';

const Mapa = ({mapa}) => {
    const { selecionarMapa } = useContext(MapasContext);

    return (
        <Box onClick={ () => selecionarMapa(mapa)}>
            <Cenario />
            <Info>
                <h1>{mapa.nome}</h1>
            
            </Info>
        </Box>
    )

}

export default Mapa;
 