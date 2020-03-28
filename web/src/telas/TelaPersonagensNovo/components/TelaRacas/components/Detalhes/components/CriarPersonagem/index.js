import React, { useContext } from 'react';

import RacasContext from '../../../../context/RacasContext';

import { Botao } from './styles';

const NomeCriar = ( props ) => {

    const { criarPersonagem } = useContext(RacasContext);

    return (
        <>
            <Botao onClick={ () => criarPersonagem() } >Criar</Botao>
        </>
    )
    
};

export default NomeCriar;
