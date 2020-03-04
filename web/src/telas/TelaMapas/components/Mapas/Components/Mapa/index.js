import React from 'react';

import { Box, Cenario, Info } from './styles';

import store from 'store';

import history from 'services/history';

const Mapa = (props) => {

    function goToMap(e) {
        e.preventDefault();

        const dispatcher = {
            type: 'SELECT_MAP',
            map: this.props.est
        }

        store.dispatch(dispatcher);
    
        history.push('/mapa');
      
    }

    return (
        <Box onClick={ () => props.func(props.mapa)}>
            <Cenario />
            <Info>
                <h1>{props.mapa.nome}</h1>
            
            </Info>
        </Box>
    )

}

export default Mapa;
 