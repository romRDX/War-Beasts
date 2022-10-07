import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';
import { personagens } from 'Data/SandBox/Personagens';
import { apiWB } from 'services/axios';
import { useWS } from 'hooks/useWS';
import { useAuth } from 'hooks/useAuth';

const Miniaturas = () => {

    const [myCharacters, setMyCharacters] = useState(null);

    const { authData } = useAuth();

    useEffect(() => {
        if(authData){
            console.log("XX: ", authData.id);
            apiWB.get('/characters', {
                params: JSON.stringify({
                userId: authData.id
                })
            }).then((resp) => {
                console.log("ZZZx: ", resp);
                setMyCharacters(resp.data.userCharacters);
            });
        }
    }, [authData]);
    
    const { sendWsMessage } = useWS();
    return (
        <Container>
            <h1>WAR BEAST</h1>
            <Minis>
                {   
                    // personagens.map( character => (
                    myCharacters && myCharacters.map( character => (
                        <Miniatura character={character} key={character.id}/>
                    ))
                }
            </Minis>
            {/* <Botao theme={{ size: [60,6]}}><Link to="/personagens/novo">Criar novo personagem</Link></Botao> */}
            

            <Botao onClick={() => {
                console.log("XXX: ", authData);
            }} theme={{ size: [60,6]}}>TESTE</Botao>

            <Botao onClick={() => {
                sendWsMessage(JSON.stringify({ teste: "RDX5" }));
            }} theme={{ size: [60,6]}}>Criar novo personagem</Botao>
        </Container>
    )
};

export default Miniaturas;
