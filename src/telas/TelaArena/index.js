import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { Botao } from 'globalComponents/Botoes/styles';
import { BotaoVoltar } from 'globalComponents/Botoes/styles.js';
import { Container, Rank, Loading } from "./styles.js";
import { useWS } from 'hooks/useWS';
import { useCharacter } from 'hooks/useCharacter';
import { useAuth } from 'hooks/useAuth';
import { useHistory } from 'react-router-dom';


const TelaArena = () => {

    const { selectedCharacter } = useCharacter();
    const { authData } = useAuth();
    const history = useHistory();

    const [isLookingForMatch, setIsLookingForMatch] = useState(false);

    const handleResponse = useCallback((data) => {
        const parsedData = JSON.parse(data.data);
        console.log("ASD PVP QUEUE: ", parsedData);

        if(parsedData.apiMessage === "ADDED TO QUEUE"){
            setIsLookingForMatch((prev) => !prev);
        }

        if(parsedData.apiMessage === "REMOVED FROM QUEUE"){
            setIsLookingForMatch((prev) => !prev);
        }

        if(parsedData.apiMessage === "MATCH SUCCEEDED"){
            // setIsLookingForMatch((prev) => !prev);
            history.push(`/batalha-PVP/${parsedData.battleData.battleId}`);
        }
    },[history]);

    const webSocketClient = useWS(handleResponse);

    const handleLookForMatch = useCallback(() => {
        // setIsLookingForMatch((prev) => !prev);

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pvp-match-making-queue",
            ready: !isLookingForMatch,
            characterId: selectedCharacter.id,
            playerId: authData.id,
            playerPVPRating: 100,
        }));
    }, [webSocketClient, isLookingForMatch, selectedCharacter, authData]);

    const buttonStyle = {
        fontSize: '30px',
        size: [20, 10],
        margin: '15px auto'
    };

    const goBackbuttonStyle = {
        margin: 'auto',
        pos: [0,0 ],
    }

    return (
        <Container>
            <BotaoVoltar theme={ goBackbuttonStyle } ><Link  to="/principal">Voltar</Link></BotaoVoltar>
            
            <h1>ARENA</h1>
            <Rank>
                <h2>Seu Rank</h2>
                <p>100</p>
            </Rank>
            { isLookingForMatch &&
                <Loading>
                    <div />
                    <p>Buscando...</p>
                </Loading>
            }
            <Botao theme={buttonStyle} onClick={handleLookForMatch} >{ isLookingForMatch ? "Cancelar" : "Buscar partida" }</Botao>
        </Container>
    )
};

export default TelaArena;