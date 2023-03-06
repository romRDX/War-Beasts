import React, { useCallback, useEffect, useState } from 'react';

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

const Ambiente = () => {
    const history = useHistory();
    const { selectedCharacter } = useCharacter();
    const { authData } = useAuth();
    const { activeStage } = useMap();

    const [showBattleResults, setShowBattleResults] = useState(false);

    const handlePveActionResponse = useCallback((data) => {
        const parsedData = JSON.parse(data.data);
        console.log("DATA-RDX2: ", parsedData);
        setBattleState(parsedData.battleData);
        setBattleLog( prev => [ ...prev, parsedData.battleLog ]);
        if(parsedData.battleData.battleResults){
            console.log("BATTLE IS OVER");
            setShowBattleResults(true);
        }
    },[]);

    const webSocketClient = useWS(handlePveActionResponse);

    const [battleLog, setBattleLog] = useState([]);
    const[battleState, setBattleState] = useState({
        battleId: null,
        playerId: null,
        characterId: null,
        monsterId: null,
        characterData: null,
        characterInitialData: null,
        monsterData: null,
        monsterInitialData: null,
        currentTurn: null,
        turnsData: null,
        battleResults: null,
    })

    useEffect(() => {
        if(webSocketClient.readyState && battleState.battleId && battleState.currentTurn == null){
            webSocketClient.sendMessage(JSON.stringify({ 
                actionType: "pve-battle-start",
                battleId: battleState.battleId,
                playerId: authData.id,
                characterId: selectedCharacter.id,
                monsterId: battleState.monsterData.id,
            }));
        }
    }, [webSocketClient, battleState.battleId, authData, selectedCharacter]);

    useEffect(() => {
        if(authData && activeStage && selectedCharacter){
            apiWB.post("/battle-start", {
                params: JSON.stringify({
                        playerId: authData.id,
                        characterId: selectedCharacter.id,
                        stageId: activeStage.id
                    })
                }
            ).then((resp) => {
                console.log("XX: ", resp.data);
                if(resp.data.success){
                    setBattleState(resp.data.battleState);
                }
            })
        }
    }, [authData, selectedCharacter, activeStage]);

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
            actionType: "pve-battle-action",
            skillId,
            battleId: battleState.battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            monsterId: battleState.monsterData.id,
            turn: battleState.currentTurn,
        }));
        
    }, [authData, selectedCharacter, battleState]);

    const handleSendEscapeMessage = useCallback(() => {

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pve-battle-escape",
            battleId: battleState.battleId,
            playerId: authData.id,
        }));

        setShowBattleResults(true);
        
    }, [authData, battleState]);

    const handleSendTurnEndMessage = useCallback(() => {

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pve-battle-end-turn",
            battleId: battleState.battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            monsterId: battleState.monsterData.id,
            turn: battleState.currentTurn,
        }));
        
    }, [authData, selectedCharacter, battleState]);

    console.log('TURN: ', battleState.turnsData);

    return (
        <Container>
            <BattleContext.Provider value={{ battleState, handleSendActionMessage, handleSendEscapeMessage, handleSendTurnEndMessage }}>
                <PlayerCard />
                <PlayerModel />
                <EnemyModel />
                <BottomMenu />
            </BattleContext.Provider>
            { showBattleResults &&
                <BattleResults>
                    <div>
                        <h1>{battleState.battleResults?.message}</h1>
                        { battleState.battleResults?.status == "win" && 
                            <>
                                <p>Experiencia recebida: {activeStage?.experience}</p>
                                <span>Recompensas extras: ---</span>
                            </>
                        }
                        
                        <div>
                            <button onClick={() => history.push("/mapa")}>Ir para Estágios</button>
                            <button onClick={() => history.push("/mapas")}>Ir para Mapas</button>
                            <button onClick={() => history.push("/principal")}>Ir para o Menu</button>
                        </div>
                    </div>
                </BattleResults>
            }
        </Container>
    )
}

export default Ambiente;