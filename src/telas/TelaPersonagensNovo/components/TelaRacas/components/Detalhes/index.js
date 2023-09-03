import React, { useContext } from 'react';

import Caracteristicas from './components/Caracteristicas';
import { Botao } from 'globalComponents/Botoes/styles';

import { Container, Container2 , Descricao, Nome } from './styles';
import raceContext from 'telas/TelaPersonagensNovo/context/raceContext';

const Detalhes = () => {
    const { selectedClass, createCharacter } = useContext(raceContext);

    const handleCreateCharacter = () => {
        const name = document.getElementById("nomePersonagem").value;
        if(name && selectedClass) createCharacter(name);
    }
    
    return (    
        <Container>
            <Descricao>
                { selectedClass && selectedClass.description }-X
            </Descricao>
            <Caracteristicas />
            <Container2>
                <Nome id={'nomePersonagem'} placeholder="Nome" >{}</Nome>
                <Botao theme={{size: [25,65]}} onClick={ () => handleCreateCharacter() } >Criar</Botao>
            </Container2>
        </Container>
    );
};

export default Detalhes;