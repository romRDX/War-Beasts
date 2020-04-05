import React, { useContext } from 'react'

// import { Conteiner } from './styles.js';
import { Botao } from 'globalComponents/Botoes/styles';
import TriboContext from 'telas/TelaPersonagensNovo/context/TriboContext.js';

const Detalhes = ( props ) => {
    const { selecionada, confirmarTribo } = useContext(TriboContext);

    return (
        <Botao theme={{size: [50,6] }} onClick={ () => confirmarTribo(selecionada) }>
            Selecionar
        </Botao>
    )
    
};

export default Detalhes;
