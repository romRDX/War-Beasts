import React, { useContext } from 'react';

import RacaContext from 'telas/TelaPersonagensNovo/components/TelaRacas/context/RacasContext';

import NomePersonagem from './components/NomePersonagem';
import CriarPersonagem from './components/CriarPersonagem';
import Caracteristicas from './components/Caracteristicas';

import { Conteiner, ConteinerB , Descricao } from './styles';

const Detalhes = ( props ) => {
    const { raca } = useContext(RacaContext);

    return (
        <Conteiner>
            <Descricao>
                { raca && raca.nome }
            </Descricao>
            <Caracteristicas />
            <ConteinerB>
                <NomePersonagem />
                <CriarPersonagem />
            </ConteinerB>
        </Conteiner>
    );
};

export default Detalhes;