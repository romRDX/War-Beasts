import React, { useContext } from 'react'

import { Botao } from 'globalComponents/Botoes/styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/raceContext.js';

const Detalhes = () => {
    const { selectedRace, confirmRace } = useContext(TriboContext);

    return (
        <Botao disabled={!selectedRace} theme={{size: [50,6] }} onClick={ () => confirmRace(selectedRace) }>
            Confirmar escolha
        </Botao>
    )
};

export default Detalhes;
