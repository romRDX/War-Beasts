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

    const handlePveActionResponse = (data) => {
        console.log("DATA-RDX: ", data.data);
    }

    const webSocketClient = useWS(handlePveActionResponse);

    const [battleId, setBattleId] = useState(null);
    const [monsterData, setMonsterData] = useState(null);

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
                console.log("XX: ", resp);
                if(resp.data.success){
                    setBattleId(resp.data.battleId);
                    setMonsterData(resp.data.monsters);
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
        console.log("X1: ", selectedCharacter.id);
        console.log("X2: ", authData.id);

        webSocketClient.sendMessage(JSON.stringify({ 
            actionType: "pve-battle-action",
            skillId,
            battleId,
            playerId: authData.id,
            characterId: selectedCharacter.id,
            monsterId: monsterData.id,
        }));
    }, [authData, selectedCharacter, battleId, monsterData]);

    return (
        <Container>
            <BattleContext.Provider value={{ battleId, monsterData, handleSendMessage }}>
                <PlayerCard />
                <PlayerModel />
                <EnemyModel />
                <BottomMenu />
            </BattleContext.Provider>
        </Container>
    )
}

export default Ambiente;