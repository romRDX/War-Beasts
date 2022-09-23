import React, { useContext } from 'react';

import RacasContext from '../../../../context/RacasContext';

import { Botao } from 'globalComponents/Botoes/styles';

const NomeCriar = () => {

    const { criarPersonagem } = useContext(RacasContext);

    return (
        <>
            <Botao theme={{size: [25,65]}} onClick={ () => criarPersonagem() } >Criar</Botao>
        </>
    )
    
};

export default NomeCriar;
