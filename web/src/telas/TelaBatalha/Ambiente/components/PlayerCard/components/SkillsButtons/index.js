import { useCharacter } from 'hooks/useCharacter';
import React, { useContext } from 'react';
import BattleContext from 'telas/TelaBatalha/Ambiente/context/BattleContext';

import { Container, Buttons, EnergyBar, Skill } from "./styles";

const SkillsButtons = ({player}) => {

    const { selectedCharacter } = useCharacter();

    const { handleSendMessage } = useContext(BattleContext);

    // console.log(handleSendMessage);
    const handleCreateAction = (skillId) => {

    }
    
    return (
        <Container>
            <Buttons>
                {
                    selectedCharacter?.skills?.map( skill => (
                        <Skill key={skill.id} className='skill' onClick={() => handleSendMessage(skill.id)} >
                            <img src={skill.icon} />
                            <h2>{skill.energy}</h2>
                        </Skill>
                    ))
                }
            </Buttons>
            <EnergyBar>
                    <div className='skill'></div>
                    <div className="bar" ></div>
            </EnergyBar>
        </Container>
    )
}

export default SkillsButtons;