import React, { useContext } from 'react'

import { Botao } from 'globalComponents/Botoes/styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/raceContext.js';

const Detalhes = () => {
    const { selectedRace, confirmRace } = useContext(TriboContext);

    return (
        <Botao theme={{size: [50,6] }} onClick={ () => confirmRace(selectedRace) }>
            Selecionar
        </Botao>
    )
};

export default Detalhes;
