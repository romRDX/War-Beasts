import React, { useContext } from 'react';

import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

import NomePersonagem from './components/NomePersonagem';
import CriarPersonagem from './components/CriarPersonagem';
import Caracteristicas from './components/Caracteristicas';

import { Conteiner, Conteiner_2, Descricao } from './styles';

const Detalhes = ( props ) => {
    const { raca } = useContext(RacaContext);

    return (
        <Conteiner>
            <Descricao>
                { raca && raca.nome }
            </Descricao>
            <Caracteristicas />
            <Conteiner_2>
                <NomePersonagem />
                <CriarPersonagem />
            </Conteiner_2>
        </Conteiner>
    );
};

export default Detalhes;