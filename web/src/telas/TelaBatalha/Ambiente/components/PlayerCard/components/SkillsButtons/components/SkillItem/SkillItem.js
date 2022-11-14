import { useCharacter } from 'hooks/useCharacter';
import React, { useContext } from 'react';
import BattleContext from 'telas/TelaBatalha/Ambiente/context/BattleContext';

import { Container, Buttons, EnergyBar, Skill } from "./styles";

const SkillItem = ({skill, activateSkill}) => {
 
    return (
        <Container onClick={() => activateSkill(skill.id)}>            
            <img src={skill.icon} />
            <h2>{skill.energy}</h2>
            <div>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
            </div>
        </Container>
    )
}

export default SkillItem;