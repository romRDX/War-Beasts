import React, { useContext } from 'react';

import { Container } from './styles';
import TracosPersonagemContext from 'telas/TelaPersonagemTracos/context/TracosPersonagemContext';

const Info = (props) => {
    const { tracoSelecionado } = useContext(TracosPersonagemContext);

    return (
        <Container>
            { tracoSelecionado.nome && <h1>{ tracoSelecionado.nome }</h1> }
                
                
            
        </Container>
    )
    
};

export default Info;