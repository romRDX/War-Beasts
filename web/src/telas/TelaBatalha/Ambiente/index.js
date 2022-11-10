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

    const [battleId, setBattleId] = useState(null);
    const [battleLog, setBattleLog] = useState([]);

    const handlePveActionResponse = useCallback((data) => {
        // console.log("DATA-RDX1: ", data.data);
        
        const parsedData = JSON.parse(data.data);
        console.log("DATA-RDX2: ", parsedData);
        setBattleState(parsedData.battleData);
        setBattleLog( prev => [ ...prev, parsedData.battleLog ]);
    },[]);

    const webSocketClient = useWS(handlePveActionResponse);

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
                console.log("XX: ", resp.data.monsters);
                if(resp.data.success){
                    setBattleId(resp.data.battleId);
                    setBattleState( prev => (
                        { 
                            ...prev,
                            battleId: resp.data.battleId,
                            monsterData: resp.data.monsters,
                            monsterInitialData: resp.data.monsters,
                        }
                    ));
                    // setMonsterData(resp.data.monsters);
                    // setTurn(1);
                }
            })
        }
    }, [authData, selectedCharacter, activeStage]);

    // useEffect(() => {
    //     if(webSocketClient){
    //         webSocketClient.sendMessage(JSON.stringify({ selectedCharacter, playerId: authData.playerId, battleId }));
    //     }
    // }, []);

    const handleSendMessage = useCallback((skillId) => {

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pve-battle-action",
            skillId,
            battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            monsterId: battleState.monsterData.id,
            turn: battleState.currentTurn,
        }));
        
    }, [authData, selectedCharacter, battleState]);

    console.log('TURN: ', battleState.currentTurn);

    return (
        <Container>
            <BattleContext.Provider value={{ battleState, handleSendMessage }}>
                <PlayerCard />
                <PlayerModel />
                <EnemyModel />
                <BottomMenu />
            </BattleContext.Provider>
        </Container>
    )
}

export default Ambiente;