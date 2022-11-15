import React, { useCallback, useEffect, useState } from 'react';

import { Container } from './styles';

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

const Ambiente = () => {

    const { selectedCharacter } = useCharacter();
    const { authData } = useAuth();
    const { activeStage } = useMap();

    const handlePveActionResponse = useCallback((data) => {
        const parsedData = JSON.parse(data.data);
        console.log("DATA-RDX2: ", parsedData);
        setBattleState(parsedData.battleData);
        setBattleLog( prev => [ ...prev, parsedData.battleLog ]);
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
    })

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

    const handleSendTurnEndMessage = useCallback((skillId) => {

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pve-battle-end-turn",
            battleId: battleState.battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            monsterId: battleState.monsterData.id,
            turn: battleState.currentTurn,
        }));
        
    }, [authData, selectedCharacter, battleState]);

    console.log('TURN: ', battleState.currentTurn);

    return (
        <Container>
            <BattleContext.Provider value={{ battleState, handleSendActionMessage }}>
                <PlayerCard />
                <PlayerModel />
                <EnemyModel />
                <BottomMenu />
            </BattleContext.Provider>
        </Container>
    )
}

export default Ambiente;