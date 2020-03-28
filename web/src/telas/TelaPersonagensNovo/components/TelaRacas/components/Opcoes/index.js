import React from 'react';

import OpcaoRaca from './components/OpcaoRaca';

import { Conteiner } from './styles';

const Opcoes = ( props ) => (
        <Conteiner>
                {
                        props.racas.map( raca => (
                                <OpcaoRaca key={raca.nome} func={props.func} raca={raca } />
                        ))
                }
        </Conteiner>
);

export default Opcoes;