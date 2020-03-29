import React from 'react';

import { Conteiner, Nome, Botao } from './styles';
import Atributos from './components/Atributos';
import Habilidades from './components/Habilidades';

const Caracteristicas = ( props ) => (
    <Conteiner>
        
            <>
                <Atributos />
                <Habilidades  />
            </>
        
    </Conteiner>
);

export default Caracteristicas;
