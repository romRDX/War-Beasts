import React, { useCallback } from 'react';

import history from 'services/history';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait, Info } from './styles';

const Detalhes = ({estagioSelecionado}) => {

    const entrarEstagio = useCallback( () => {

        const dispatcher = {
            type: 'ENTER_STAGE',
            stage: estagioSelecionado.nome,
            nome: estagioSelecionado.nome
        }

        history.push('/batalha-A');
    }, [history, estagioSelecionado]);

    return (
        <Container>
            <Portrait />
            <Info>
                <div>
                    { estagioSelecionado.nome  && <h2>Estágio: { estagioSelecionado.nome }</h2>}
                </div>
                <div>
                    { estagioSelecionado.nivel  && <h2>Nível: { estagioSelecionado.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Botao theme={{ size: [60,6], margin: '10px auto 25px'}} onClick={ entrarEstagio.bind(this)}> Entrar </Botao>
        </Container>
    )
    
};

export default Detalhes;