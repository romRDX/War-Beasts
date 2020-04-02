import React from 'react';
import { Link } from 'react-router-dom';

import store from 'store';
import history from 'services/history';

import {  } from './styles';
import { Box, Portrait, Info, Entrar } from './styles';

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
        <Box>
            <Link className="voltar" to="/mapas">Voltar</Link>
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
            <Entrar onClick={ entrarEstagio.bind(this)}> Entrar </Entrar>
        </Box>
    )
    
};

export default Detalhes;