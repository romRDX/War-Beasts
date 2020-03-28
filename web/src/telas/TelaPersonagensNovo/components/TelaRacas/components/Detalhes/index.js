import React from 'react';

import tribos from 'Data/Tribos/index';

import NomePersonagem from './components/NomePersonagem';
import CriarPersonagem from './components/CriarPersonagem';
import Caracteristicas from './components/Caracteristicas';

import { Conteiner, Conteiner_2, Descricao } from './styles';

const Detalhes = ( props ) => {

    return (
        <Conteiner>
            <Descricao>
                { props.raca.nome }
            </Descricao>
            <Caracteristicas raca={props.raca} />
            <Conteiner_2>
                <NomePersonagem />
                <CriarPersonagem />
            </Conteiner_2>
        </Conteiner>
    );
};

export default Detalhes;