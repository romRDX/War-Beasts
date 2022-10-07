import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';
import { personagens } from 'Data/SandBox/Personagens';
import { apiWB } from 'services/axios';
import { useWS } from 'hooks/useWS';

const Miniaturas = () => {

    const [myCharacters, setMyCharacters] = useState([]);

    useEffect(() => {
        apiWB.get('/characters').then((resp) => {
            console.log("ZZZx: ", resp);
        });
    }, []);
    
    const { sendWsMessage } = useWS();
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
            {/* <Botao theme={{ size: [60,6]}}><Link to="/personagens/novo">Criar novo personagem</Link></Botao> */}
            

            <Botao onClick={() => {
                apiWB.post('/login').then((resp) => {
                // apiWB.get('/characters').then((resp) => {
                    console.log("rrr: ", resp);
                });
            }} theme={{ size: [60,6]}}>TESTE</Botao>

            <Botao onClick={() => {
                sendWsMessage(JSON.stringify({ teste: "RDX5" }));
            }} theme={{ size: [60,6]}}>Criar novo personagem</Botao>
        </Container>
    )
};

export default Miniaturas;
