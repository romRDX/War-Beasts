import React, { useContext } from 'react';

import history from 'services/history';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait, Info } from './styles';
import { useMap } from 'hooks/useMap';
import StagesContext from 'telas/TelaMapa/context/StagesContext';

const Detalhes = () => {
    const { selectedStage } = useContext(StagesContext);
    const { setActiveStage } = useMap();

    const handleSetActiveStage = () => {
        if(selectedStage){
            setActiveStage(selectedStage)
            history.push("/batalha-A");
        }
    }

    return (
        <Container>
            <Portrait />
            <Info>
                <div>
                    { selectedStage  && <h2>Nome: { selectedStage.name }</h2>}
                </div>
                <div>
                    { selectedStage  && <h2>Descrição: { selectedStage.description }</h2>}
                </div>
            </Info>
            <Botao theme={{ size: [60,6], margin: '10px auto 25px'}} onClick={handleSetActiveStage}> Entrar </Botao>
        </Container>
    )
    
};

export default Detalhes;