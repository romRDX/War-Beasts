import React, { useContext } from 'react'

import { Botao } from 'globalComponents/Botoes/styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext.js';

const Detalhes = () => {
    const { triboSelecionada, confirmarTribo } = useContext(TriboContext);

    return (
        <Botao theme={{size: [50,6] }} onClick={ () => confirmarTribo(triboSelecionada) }>
            Selecionar
        </Botao>
    )
};

export default Detalhes;
