import React from 'react';

import { Box, Cenario, Info } from './styles';

import store from 'store';

import history from 'services/history';

const Estagio = (props) => {

    const goToMap = (e) => {
        e.preventDefault();

        const dispatcher = {
            type: 'SELECT_MAP',
            map: props.est
        }

        store.dispatch(dispatcher);
        history.push('/mapa');
    }

    return (
        <Box onClick={goToMap}>
            <Cenario />
            <Info>
                <h1>{props.est.nome}</h1>
                <h2>Nv. {props.est.nivel}</h2>
            </Info>
        </Box>
    )
}

export default Estagio;
 