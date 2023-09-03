import React from 'react';
import { useMap } from 'hooks/useMap';

import Estagio from './components/Estagio';

import { Background } from './styles.js';

const Mapa = () => {

    const { activeMap } = useMap();

    return (
        <Background>
            {
                activeMap?.stages.map( estagio => (
                    <Estagio key={estagio.nome} estagio={estagio} />
                ))
            }
        </Background>
    ) 
}

export default Mapa;