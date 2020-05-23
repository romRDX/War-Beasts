import React, { useContext } from 'react';

import { Container } from './styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext';

const OpcaoTribo = ( {tribo} ) => {
        const { selecionarTribo } = useContext(TriboContext);

        return (
                <Container onClick={() => selecionarTribo(tribo) }>
                        <h2>{tribo.nome}</h2>
                </Container>
        )
        
};

export default OpcaoTribo;
