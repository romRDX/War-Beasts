import React from 'react';

import { Conteiner } from './styles';
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
