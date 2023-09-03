import React from 'react';

import { Container } from "./styles";

const SkillItem = ({skill, activateSkill, disabled}) => {
 
    return (
        <Container onClick={() => activateSkill(skill.id)} disabled={disabled}>            
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