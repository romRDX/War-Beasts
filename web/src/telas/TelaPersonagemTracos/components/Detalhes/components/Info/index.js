import React, { useContext } from 'react';

import { Conteiner } from './styles';
import TracosPersonagemContext from 'telas/TelaPersonagemTracos/context/TracosPersonagemContext';


const Info = (props) => {
    const { tracoSelecionado } = useContext(TracosPersonagemContext);

    return (
        <Conteiner>
            { tracoSelecionado.nome && <h1>{ tracoSelecionado.nome }</h1> }
                
                
            
        </Conteiner>
    )
    
};

export default Info;