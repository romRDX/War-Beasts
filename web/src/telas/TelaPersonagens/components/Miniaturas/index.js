import React, { useState, useEffect } from 'react'

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';
import { apiWB } from 'services/axios';
import { useWS } from 'hooks/useWS';
import { useAuth } from 'hooks/useAuth';

const Miniaturas = () => {

    const [myCharacters, setMyCharacters] = useState(null);

    const { authData } = useAuth();

    useEffect(() => {
        if(authData){
            apiWB.get('/characters', {
                params: JSON.stringify({
                userId: authData.id
                })
            }).then((resp) => {
                console.log(resp.data.userCharacters);
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
                    myCharacters && myCharacters.map( character => (
                        <Miniatura character={character} key={character.id}/>
                    ))
                }
            </Minis>
        
            <Botao onClick={() => {
                sendWsMessage(JSON.stringify({ teste: "RDX5" }));
            }} theme={{ size: [60,6]}}>Criar novo personagem</Botao>
        </Container>
    )
};

export default Miniaturas;
