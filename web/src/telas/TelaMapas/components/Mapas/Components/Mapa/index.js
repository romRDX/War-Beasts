import React, { useContext } from 'react';

import { Box, Cenario, Info } from './styles';

import MapsContext from 'telas/TelaMapas/context/MapsContext';

const Mapa = ({mapa}) => {
    const { selecionarMapa, mapaSelecionado } = useContext(MapsContext);

    return (
        <Box key={mapa.id} isSelected={ mapaSelecionado.id == mapa.id } onClick={ () => selecionarMapa(mapa)}>
            <Cenario>

            </Cenario>
            <Info>
                <h1>{mapa.name}</h1>
            
            </Info>
        </Box>
    )

}

export default Mapa;
 