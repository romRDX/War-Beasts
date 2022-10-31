import React, { useContext } from 'react';
import StagesContext from 'telas/TelaMapa/context/StagesContext';

import { Box } from './styles';

const Estagio = ({estagio}) => {

    const { setSelectedStage, selectedStage } = useContext(StagesContext);
    
    return (
        <Box isSelected={selectedStage?.id == estagio.id} posicao={estagio.position} onClick={() => setSelectedStage(estagio)} > <p>{estagio.id}</p> </Box>
    )
}

export default Estagio
