import React, { useEffect, useState } from 'react';

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
    const webSocketClient = useWS();

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

    useEffect(() => {
        if(webSocketClient){
            webSocketClient.sendMessage(JSON.stringify({ teste: "RED-2"}));
        }
    }, [webSocketClient]);

    const handleSendMessage = () => {

    }

    return (
        <Container>
            <BattleContext.Provider value={{ battleId, monsterData }}>
                <PlayerCard />
                <PlayerModel />
                <EnemyModel />
                <BottomMenu />
            </BattleContext.Provider>
        </Container>
    )
}

export default Ambiente;