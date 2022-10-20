import React, { useState, useEffect, useCallback } from 'react'

import Miniatura from './components/Miniatura';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';
import { apiWB } from 'services/axios';
import { useWS } from 'hooks/useWS';
import { useAuth } from 'hooks/useAuth';

const Miniaturas = () => {

    const [myCharacters, setMyCharacters] = useState(null);

    const { authData } = useAuth();

    const getMyCharacters = useCallback(() => {
        if(authData){
            apiWB.get('/characters', {
                params: JSON.stringify({
                userId: authData.id
                })
            }).catch((err)=>{
                console.log("ERROR: ", err);
            }).then((resp) => {
                // console.log();
                console.log("YOUR CHAR: ", resp.data.userCharacters);
                setMyCharacters(resp.data.userCharacters);
            });
        }
    }, [authData]);

    // useEffect(() => {
        // if(authData){
        //     apiWB.get('/characters', {
        //         params: JSON.stringify({
        //         userId: authData.id
        //         })
        //     }).then((resp) => {
        //         // console.log();
        //         console.log("YOUR CHAR: ", resp.data.userCharacters);
        //         setMyCharacters(resp.data.userCharacters);
        //     });
        // }
        // if(myCharacters == null){
        //     getMyCharacters();
            // console.log("EFFECT1: ", myCharacters);
            // console.log("EFFECT2: ", authData);
        // }
        
    // }, [myCharacters, authData]);

    useEffect(() => {
        // if(myCharacters == null){
            getMyCharacters();
            // console.log("EFFECT3: ", myCharacters);
            // console.log("EFFECT4: ", authData);
        // }
    }, []);

    // getMyCharacters();
    
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
