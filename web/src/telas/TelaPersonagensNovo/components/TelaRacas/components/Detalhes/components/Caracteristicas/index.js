import React from 'react';

import { Conteiner, Nome, Botao } from './styles';
import Atributos from './components/Atributos';
import Habilidades from './components/Habilidades';

const Caracteristicas = ( props ) => (
    <Conteiner>
        {props.raca && 
            <>
                <Atributos atri={props.raca.atributos}/>
                <Habilidades hab={props.raca.habilidades} />
            </>
        }
    </Conteiner>
);

export default Caracteristicas;
