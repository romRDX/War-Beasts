import React, { useEffect, useState, useContext} from 'react';
import ListaIcones from 'globalComponents/ListaIcones/index.js';
import { apiWB } from 'services/axios.js';
import characterSkillsContext from 'telas/TelaPersonagemHabilidades/context/characterSkillsContext.js';

import { Container } from './styles.js';

const Habilidades = () => {

    const { selectedSkillFromList, setSelectedSkillFromList, setSelectedSkill } = useContext(characterSkillsContext);

    const [skills, setSkills] = useState(null);

    useEffect(() => {
        apiWB.get('/skills').then((resp) => {
            setSkills(resp.data.skills);
        });
    }, []);

    return (
        <Container>
            {
                skills && <ListaIcones dados={skills} selected={selectedSkillFromList} setSelectedItemFromList={setSelectedSkillFromList} setSelected={setSelectedSkill} />
            }
        </Container>
    ) 
}

export default Habilidades;