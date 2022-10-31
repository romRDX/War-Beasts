import React from 'react';

import { Botao } from 'globalComponents/Botoes/styles.js';

import { useHistory } from 'react-router-dom';

import { Container, Portrait, Info } from './styles';
import { useMap } from 'hooks/useMap';

const Detalhes = ({ mapaSelecionado }) => {
    const history = useHistory();
    const { setActiveMap } = useMap();
    
    const entrarMapa = ()  => {
        if (mapaSelecionado){
            setActiveMap(mapaSelecionado);
            history.push('/mapa');
        }
    };

    const buttonStyle = {
        margin: ' 0 auto 15px',
        size: [60,6],
        fontSize: '20px',
    }

    return (
        <Container>
            <Portrait />
            <Info>
                <div>
                    {  mapaSelecionado  && <h2>Estágio: {  mapaSelecionado.name }</h2>}
                </div>
                <div>
                    {  mapaSelecionado  && <><h2>Nível:</h2><p>{mapaSelecionado.level[0]}</p>-<p>{mapaSelecionado.level[1]}</p></> }
                </div>
                <div>
                {  mapaSelecionado  && <h2>Descrição: {  mapaSelecionado.description }</h2>}
                </div>
            </Info>
            <Botao theme={buttonStyle} onClick={ entrarMapa }> Entrar </Botao>
        </Container>
    )
    
};

export default Detalhes;