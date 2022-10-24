import React, { useContext } from 'react';

import { Container } from './styles';
import characterSkillsContext from 'telas/TelaPersonagemHabilidades/context/characterSkillsContext';

const Info = () => {
    const { selectedSkill } = useContext(characterSkillsContext);
    return (
        <Container>
            { selectedSkill && 
                <>
                    <h1>{ selectedSkill.name }</h1>
                    
                    <div>
                        <p>Type:</p>
                        { selectedSkill.type.map((item) => <p>{item}</p>)}
                    </div>
                    <p>Energy cost: { selectedSkill.energy }</p>
                    <p>Value: { selectedSkill.value }</p>
                    <p>Description:</p>
                    <p>{selectedSkill.description}</p>
                </>
            }            
        </Container>
    )
    
};

export default Info;