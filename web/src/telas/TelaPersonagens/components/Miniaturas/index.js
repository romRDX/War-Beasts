import React, { useState, useEffect, useCallback } from 'react'
import { useHistory } from 'react-router-dom';

import Miniatura from './components/Miniatura';
import { Botao } from 'globalComponents/Botoes/styles';
import { Container , Minis } from './styles.js';
import { apiWB } from 'services/axios';
import { useWS } from 'hooks/useWS';
import { useAuth } from 'hooks/useAuth';

const Miniaturas = () => {

    const history = useHistory();

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

                console.log("YOUR CHAR: ", resp.data.userCharacters);
                setMyCharacters(resp.data.userCharacters);
            });
        }
    }, [authData]);

    useEffect(() => {
        getMyCharacters();
    }, []);
    
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
                history.push("/personagens/novo")
            }} theme={{ size: [60,6]}}>Criar novo personagem</Botao>
        </Container>
    )
};

export default Miniaturas;
