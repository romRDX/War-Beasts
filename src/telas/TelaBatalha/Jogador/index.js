import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { Container, BattleResults } from './styles';

import PlayerCard from './components/PlayerCard';
import PlayerModel from './components/PlayerModel';
import EnemyModel from './components/EnemyModel';
import BottomMenu from './components/BottomMenu';
import { apiWB } from 'services/axios';
import { useCharacter } from 'hooks/useCharacter';
import { useAuth } from 'hooks/useAuth';
import { useMap } from 'hooks/useMap';
import BattleContext from './context/BattleContext';
import { useWS } from 'hooks/useWS';
import { useHistory } from 'react-router-dom';

const Ambiente = ({ match }) => {
    const history = useHistory();
    const { selectedCharacter } = useCharacter();
    const { authData } = useAuth();
    const { activeStage } = useMap();

    const [showBattleResults, setShowBattleResults] = useState(false);
    const [playerNumber, setPlayerNumber] = useState(0);
    const [battleLog, setBattleLog] = useState([]);
    const [battleState, setBattleState] = useState();

    console.log("BATTLE-STATE: ", battleState);

    const handlePveActionResponse = useCallback((data) => {
        const parsedData = JSON.parse(data.data);
        // console.log("PVP-BATTLE-DATA: ", parsedData);
        setBattleState(parsedData.battleData);

        if(parsedData.dataType === "battle-start-config"){
            if(parsedData.battleData.player1Id === authData.id){
                setPlayerNumber(1);
            } else {
                setPlayerNumber(2);
            }
        }

        
        // setBattleLog( prev => [ ...prev, parsedData.battleLog ]);
        if(parsedData.battleData.battleResults){
            console.log("BATTLE IS OVER");
            setShowBattleResults(true);
        }
    },[authData]);

    const webSocketClient = useWS(handlePveActionResponse);

    // console.log('BATTLE-ID: ', battleState?.battleId);

    useEffect(() => {
        if(webSocketClient.readyState && !battleState){
            webSocketClient.sendMessage(JSON.stringify({ 
                actionType: "pvp-battle-ready",
                battleId: match.params.battleId,
                playerId: authData.id,
                characterId: selectedCharacter.id,
            }));
        }
    }, [webSocketClient, match, authData, selectedCharacter, battleState]);

    const playersData = useMemo(() => {
        if(!battleState){
            return {
                myData: {},
                enemyData: {}
            }
        }

        return {
            myData: battleState.players.find((player) => player.playerId === authData.id ),
            enemyData: battleState.players.find((player) => player.playerId !== authData.id )
        }
    }, [authData, battleState])

    // }, [webSocketClient, battleState.battleId, authData, selectedCharacter, battleState.currentTurn, battleState.monsterData.id]);

    // useEffect(() => {
    //     if(authData && activeStage && selectedCharacter){
    //         apiWB.post("/battle-start", {
    //             params: JSON.stringify({
    //                     playerId: authData.id,
    //                     characterId: selectedCharacter.id,
    //                     stageId: activeStage.id
    //                 })
    //             }
    //         ).then((resp) => {
    //             console.log("XX: ", resp.data);
    //             if(resp.data.success){
    //                 setBattleState(resp.data.battleState);
    //             }
    //         })
    //     }
    // }, [authData, selectedCharacter, activeStage]);

    // useEffect(() => {
    //     if(battleState.battleId && battleState.currentTurn != null){
    //         if(battleState.characterData.HP <= 0 || battleState.monsterData.HP <= 0){
    //             console.log("BATTLE IS OVER");
    //         }
    //     }
    // },[battleState]);

    // console.log("CHAR: ", battleState.characterData);

    const handleSendActionMessage = useCallback((skillId) => {

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pvp-battle-action",
            skillId,
            battleId: battleState.battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            turn: battleState.currentTurn,
        }));
        
    }, [webSocketClient, battleState, authData, selectedCharacter]);

    const handleSendEscapeMessage = useCallback(() => {

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pve-battle-escape",
            battleId: battleState.battleId,
            playerId: authData.id,
        }));

        setShowBattleResults(true);
        
    }, [authData, battleState, webSocketClient]);

    const handleSendTurnEndMessage = useCallback(() => {

        // console.log("KKK: ", playersData.enemyData);

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pvp-battle-end-turn",
            battleId: battleState.battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            enemyPlayerId: playersData.enemyData.playerId,
            enemyCharacterId: playersData.enemyData.characterId,
            turn: battleState.currentTurn,
        }));
        
    }, [webSocketClient, battleState, battleState, battleState, authData, selectedCharacter]);

    // console.log("asd: ", battleState?.battleLogs);

    return (
        <Container>
            <BattleContext.Provider value={{ battleState, playersData, handleSendActionMessage, handleSendEscapeMessage, handleSendTurnEndMessage }}>
                <PlayerCard player={playersData.myData} />
                <PlayerModel player={playersData.myData} />
                <EnemyModel player={playersData.enemyData} />
                <BottomMenu logs={battleState?.battleLogs || ''} characterId={selectedCharacter?.id} />
            </BattleContext.Provider>
            { showBattleResults &&
                <BattleResults>
                    <div>
                        <h1>
                        {
                            battleState.battleResults?.winnerId == selectedCharacter.id ?
                            'You Win!'
                            :
                            'You Lose!'
                        }
                        </h1>
                        { battleState.battleResults?.status == "win" && 
                        // fazer a redução de ranking no back
                            <>
                                <p>Pontos de ranking nesta partida: {activeStage?.experience}</p>
                                <span>Ranking após partida: ---</span>
                            </>
                        }
                        
                        <div>
                            <button onClick={() => history.push("/arena")}>Voltar para Arena</button>
                            <button onClick={() => history.push("/principal")}>Ir para o Menu</button>
                        </div>
                    </div>
                </BattleResults>
            }
        </Container>
    )
}

export default Ambiente;