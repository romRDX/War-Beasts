import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import { Container } from './styles';

import characterSkillsContext from './context/characterSkillsContext';

import Detalhes from './components/Detalhes';
import Habilidades from './components/Habilidades';
import { useCharacter } from 'hooks/useCharacter';

const TelaPersonagemHabilidades = () => {

    const { selectedCharacter, updateSelectedCharacter } = useCharacter();

    const [selectedSkill, setSelectedSkill ] = useState();
    const [selectedCharacterSlot, setSelectedCharacterSlot] = useState(null);
    const [selectedSkillFromList, setSelectedSkillFromList] = useState(null);

    const handleEquipSkill = () => {

        const areThereOneSlotAndOneSkillSelected = selectedCharacterSlot && selectedSkillFromList;

        if(areThereOneSlotAndOneSkillSelected){

            const skillsIds = selectedCharacter.skills.map((skill) => skill ? skill.id : null);

            const isNotAlreadyEquiped = !skillsIds.includes(selectedSkillFromList.id);
            
            if(isNotAlreadyEquiped){
                
                const newSkillsArray = selectedCharacter.skills.map((skill, index) => {

                    if(skill){
                        if(skill.id !== selectedSkillFromList.id && skill.id == selectedCharacterSlot.id){
                            setSelectedCharacterSlot(selectedSkillFromList)
                            return selectedSkillFromList;
                        } else {
                            return skill;
                        }
                    } else {
                        if(typeof selectedCharacterSlot == "string"){
                            const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));
                            setSelectedCharacterSlot(selectedSkillFromList)
                            if(index == slotPosition) return selectedSkillFromList;
                            
                        } else {
                            return null;
                        }
                    }
                });

                updateSelectedCharacter(newSkillsArray, "skills");
            }
        }
    };

    const handleUnequipSkill = () => {

        const newSkillsArray = [...selectedCharacter.skills];

        const isAnEmptySlot = !selectedCharacterSlot.id;

        if(!isAnEmptySlot){
            newSkillsArray.forEach((skill, index) => {
                if(skill && skill.id == selectedCharacterSlot.id){
                    newSkillsArray.splice(index, 1, undefined);
                    setSelectedCharacterSlot("empty-slot-"+index);
                }
            });
        };

        updateSelectedCharacter(newSkillsArray, "skills");
    };

    return (
        <Container>
            <BotaoVoltar ><Link  to="/personagem">Voltar</Link></BotaoVoltar>
            <characterSkillsContext.Provider value={{
                selectedCharacterSlot,
                setSelectedCharacterSlot,
                selectedSkillFromList,
                setSelectedSkillFromList,
                selectedSkill,
                setSelectedSkill,
                handleEquipSkill,
                handleUnequipSkill
            }} >
                <Detalhes />
                <Habilidades />
            </characterSkillsContext.Provider>
        </Container>
    )
};

export default TelaPersonagemHabilidades;