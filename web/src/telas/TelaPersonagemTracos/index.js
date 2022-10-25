import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import { Container } from './styles';

import CharacterTraitsContext from './context/characterTraitsContext';

import Detalhes from './components/Detalhes';
import Habilidades from './components/Habilidades';
import { useCharacter } from 'hooks/useCharacter';

const TelaPersonagemTracos = () => {

    const { selectedCharacter, setSelectedCharacter, updateSelectedCharacter } = useCharacter();

    const [ selectedTrait, setSelectedTrait ] = useState();
    const [selectedCharacterSlot, setSelectedCharacterSlot] = useState(null);
    const [selectedTraitFromList, setSelectedTraitFromList] = useState(null);

    const handleEquipTrait = () => {

        const areThereOneSlotAndOneTraitSelected = selectedCharacterSlot && selectedTraitFromList;

        if(areThereOneSlotAndOneTraitSelected){

            const traitsIds = selectedCharacter.traits.map((trait) => trait ? trait.id : null);

            const isNotAlreadyEquiped = !traitsIds.includes(selectedTraitFromList.id);
            
            if(isNotAlreadyEquiped){
                
                const newTraitsArray = selectedCharacter.traits.map((trait, index) => {

                    if(trait){
                        if(trait.id !== selectedTraitFromList.id && trait.id == selectedCharacterSlot.id){
                            setSelectedCharacterSlot(selectedTraitFromList)
                            return selectedTraitFromList;
                        } else {
                            return trait;
                        }
                    } else {
                        if(typeof selectedCharacterSlot == "string"){
                            const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));
                            setSelectedCharacterSlot(selectedTraitFromList)
                            if(index == slotPosition) return selectedTraitFromList;
                            
                        } else {
                            return null;
                        }
                    }
                });
                console.log(newTraitsArray);
                updateSelectedCharacter(newTraitsArray, "traits");
            }
        }
    };

    const handleUnequipTrait = () => {

        const newTraitsArray = [...selectedCharacter.traits];

        const isAnEmptySlot = !selectedCharacterSlot.id;

        if(!isAnEmptySlot){
            newTraitsArray.forEach((trait, index) => {
                if(trait && trait.id == selectedCharacterSlot.id){
                    newTraitsArray.splice(index, 1, undefined);
                    setSelectedCharacterSlot("empty-slot-"+index);
                }
            });
        };

        updateSelectedCharacter(newTraitsArray, "traits");
    };

    return (
        <Container>
            <BotaoVoltar ><Link  to="/personagem">Voltar</Link></BotaoVoltar>
            <CharacterTraitsContext.Provider value={{
                selectedCharacterSlot,
                setSelectedCharacterSlot,
                selectedTraitFromList,
                setSelectedTraitFromList,
                selectedTrait,
                setSelectedTrait,
                handleEquipTrait,
                handleUnequipTrait
            }} >
                <Detalhes />
                <Habilidades />
            </CharacterTraitsContext.Provider>
        </Container>
    )
};

export default TelaPersonagemTracos;