import React, { useContext } from 'react'

import { Conteiner } from './styles.js';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext.js';

const Detalhes = ( props ) => {
    const { selecionada, confirmarTribo } = useContext(TriboContext);

    return (
        <Conteiner onClick={ () => confirmarTribo(selecionada) }>
            botão
        </Conteiner>
    )
    
};

export default Detalhes;
