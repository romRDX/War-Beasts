import React from 'react';

import store from 'store';
import history from 'services/history';

import { Botao } from 'globalComponents/Botoes/styles';
import { Conteiner, Portrait, Info, Entrar } from './styles';

const Detalhes = (props) => {

    const entrarEstagio = () => {

        const dispatcher = {
            type: 'ENTER_STAGE',
            stage: props.info.nome,
            nome: props.info.nome
        }

        store.dispatch(dispatcher);
        history.push('/batalha-A');
    }

    return (
        <Conteiner>
            <Portrait />
            <Info>
                <div>
                    { props.info.nome  && <h2>Estágio: { props.info.nome }</h2>}
                </div>
                <div>
                    { props.info.nivel  && <h2>Nível: { props.info.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Botao theme={{ size: [60,6], margin: '10px auto 25px'}} onClick={ entrarEstagio.bind(this)}> Entrar </Botao>
        </Conteiner>
    )
    
};

export default Detalhes;