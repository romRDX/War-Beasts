import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { BotaoVoltar } from 'globalComponents/Botoes/styles';
import { Container } from './styles';

import ItemsPersonagemContext from './context/ItemsPersonagemContext';

import Detalhes from './components/Detalhes';
import Habilidades from './components/Habilidades';
import { useCharacter } from 'hooks/useCharacter';

const TelaPersonagemItems = () => {

    const { selectedCharacter, setSelectedCharacter, updateSelectedCharacter } = useCharacter();

    const [ itemSelecionado, setItemSelecionado ] = useState();
    const [selectedCharacterSlot, setSelectedCharacterSlot] = useState(null);
    const [selectedItemFromList, setSelectedItemFromList] = useState(null);

    const handleEquipItem = () => {

        const areThereOneSlotAndOneItemSelected = selectedCharacterSlot && selectedItemFromList;

        if(areThereOneSlotAndOneItemSelected){

            const itensIds = selectedCharacter.itens.map((item) => item ? item.id : null);

            const isNotAlreadyEquiped = !itensIds.includes(selectedItemFromList.id);
            
            if(isNotAlreadyEquiped){
                
                const newItensArray = selectedCharacter.itens.map((item, index) => {

                    if(item){
                        if(item.id !== selectedItemFromList.id && item.id == selectedCharacterSlot.id){
                            setSelectedCharacterSlot(selectedItemFromList)
                            return selectedItemFromList;
                        } else {
                            return item;
                        }
                    } else {
                        if(typeof selectedCharacterSlot == "string"){
                            const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));
                            setSelectedCharacterSlot(selectedItemFromList)
                            if(index == slotPosition) return selectedItemFromList;
                            
                        } else {
                            return null;
                        }
                    }
                });

                updateSelectedCharacter(newItensArray, "itens");
            }
        }
    };

    const handleUnequipItem = () => {

        const newItensArray = [...selectedCharacter.itens];

        const isAnEmptySlot = !selectedCharacterSlot.id;

        if(!isAnEmptySlot){
            newItensArray.forEach((item, index) => {
                if(item && item.id == selectedCharacterSlot.id){
                    newItensArray.splice(index, 1, undefined);
                    setSelectedCharacterSlot("empty-slot-"+index);
                }
            });
        };

        updateSelectedCharacter(newItensArray, "itens");
    };

    return (
        <Container>
            <BotaoVoltar ><Link  to="/personagem">Voltar</Link></BotaoVoltar>
            <ItemsPersonagemContext.Provider value={{
                selectedCharacterSlot,
                setSelectedCharacterSlot,
                selectedItemFromList,
                setSelectedItemFromList,
                itemSelecionado,
                setItemSelecionado,
                handleEquipItem,
                handleUnequipItem
            }} >
                <Detalhes />
                <Habilidades />
            </ItemsPersonagemContext.Provider>
        </Container>
    )
};

export default TelaPersonagemItems;