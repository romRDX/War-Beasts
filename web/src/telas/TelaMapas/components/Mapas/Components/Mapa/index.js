import React, { useContext } from 'react';

import { Box, Cenario, Info } from './styles';

import store from 'store';

import history from 'services/history';
import MapasContext from 'telas/TelaMapas/context/MapasContext';



const Mapa = (props) => {
    const { selecionarMapa } = useContext(MapasContext);

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
        <Box onClick={ () => selecionarMapa(props.mapa)}>
            <Cenario />
            <Info>
                <h1>{props.mapa.nome}</h1>
            
            </Info>
        </Box>
    )

}

export default Mapa;
 