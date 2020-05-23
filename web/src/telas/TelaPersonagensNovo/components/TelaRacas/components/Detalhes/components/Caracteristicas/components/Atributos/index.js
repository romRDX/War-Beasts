import React, { useContext } from 'react';

import { Container } from './styles';
import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

const Atributos = ( props ) => {
    const { raca } = useContext(RacaContext)

    return (
        <Container>
        { raca && <>
            <h2>STR: {raca.atributos.STR}</h2>
            <h2>DEX: {raca.atributos.DEX}</h2>
            <h2>INT: {raca.atributos.INT}</h2>
            <h2>CON: {raca.atributos.CON}</h2>
            <h2>TOU: {raca.atributos.TOU}</h2>
            <h2>AGI: {raca.atributos.AGI}</h2>
            </>
        }
            
        </Container>
    )
    
};

export default Atributos;
