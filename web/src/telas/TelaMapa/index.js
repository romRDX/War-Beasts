import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';

import Mapa from './components/Mapa';

import Detalhes from './components/Detalhes';

import { Container } from './styles';

import StagesContext from './context/StagesContext';

const TelaMapa = () => {

    const [selectedStage, setSelectedStage ] = useState(null);
    
    return (
        <Container>
            <BotaoVoltar ><Link  to="/mapas">Voltar</Link></BotaoVoltar>
            <StagesContext.Provider value={{ selectedStage, setSelectedStage }}>
                <Detalhes />
                <Mapa />
            </StagesContext.Provider>
        </Container>
    )
    
};

export default TelaMapa;