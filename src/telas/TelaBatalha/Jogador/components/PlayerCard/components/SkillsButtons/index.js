import React, { useContext, useMemo } from 'react';
import BattleContext from 'telas/TelaBatalha/Jogador/context/BattleContext';
import SkillItem from './components/SkillItem/SkillItem';

import { Container, Buttons, EnergyBar } from "./styles";
import { useCharacter } from 'hooks/useCharacter';

const SkillsButtons = ({ player }) => {

    const { selectedCharacter } = useCharacter();
    const { battleState, handleSendActionMessage } = useContext(BattleContext);

    const energyData = useMemo(() => {
        const monsterCurrentEnergy = player?.characterData?.energy;
        const monsterMaxEnergy = player?.characterInitialData?.energy;

        const finalData = {
            maxEnergy: monsterMaxEnergy,
            currentEnergy: monsterCurrentEnergy,
            percentageEnergy: 0
        }

        if(monsterMaxEnergy && monsterCurrentEnergy){
            const finalHP = monsterCurrentEnergy*100/monsterMaxEnergy;

            if(finalHP < 0){
                finalData.percentageEnergy = 0;
            } else {
                finalData.percentageEnergy = finalHP    
            };
        } else {
            finalData.percentageEnergy = 100;
        }

        return finalData;
    }, [player]);
    
    return (
        <Container>
            <Buttons isMyTurn={battleState?.currentCharacterToAct === selectedCharacter.id}>
                {
                    // selectedCharacter?.skills?.map( skill => (
                    //     <SkillItem key={skill?.id} className='skill' activateSkill={handleSendActionMessage} skill={skill} disabled={battleState.battleResults} />
                    // ))

                    player?.characterData?.skills?.map( skill => {
                        return skill ? 
                            <SkillItem 
                                key={skill?.id} 
                                className='skill' 
                                activateSkill={handleSendActionMessage} 
                                skill={skill} 
                                disabled={
                                    battleState?.battleResults
                                    ||
                                    battleState?.currentCharacterToAct !== selectedCharacter.id
                                }
                            />
                            : 
                            null;
                    })
                }
            </Buttons>
            <EnergyBar percentageEnergy={energyData.percentageEnergy}>
                    <div className='skill'></div>
                    <div className="bar" >
                        <div />
                        <p>{energyData.currentEnergy}/{energyData.maxEnergy}</p>
                        {/* MECANICA SKILL <div>{battleState?.characterData?.energy || 0 }</div> */}
                    </div>
            </EnergyBar>
        </Container>
    )
}

export default SkillsButtons;