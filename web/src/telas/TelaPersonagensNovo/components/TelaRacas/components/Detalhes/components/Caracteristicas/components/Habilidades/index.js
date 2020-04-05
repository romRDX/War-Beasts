import React, { useContext } from 'react';

import { Conteiner } from './styles';
import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

const Habilidades = ( props ) => {
    const { raca } = useContext(RacaContext);

    return (
        <Conteiner>
            <div>{ raca && raca.habilidades[0].nome}</div>
        </Conteiner>
    )
    
};

export default Habilidades;
