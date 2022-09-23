import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';
import { personagens } from 'Data/SandBox/Personagens';
import { apiWB } from 'services/axios';

const Miniaturas = () => {

    const [myCharacters, setMyCharacters] = useState([]);

    useEffect(() => {
        apiWB.get('/characters').then((resp) => {
            console.log("ZZZx: ", resp);
        });
    }, []);
    

    return (
        <Container>
            <h1>WAR BEAST</h1>
            <Minis>
                {   
                    personagens.map( character => (
                        <Miniatura character={character} key={character.id}/>
                    ))
                }
            </Minis>
            <Botao theme={{ size: [60,6]}}><Link to="/personagens/novo">Criar novo personagem</Link></Botao>
        </Container>
    )
};

export default Miniaturas;
