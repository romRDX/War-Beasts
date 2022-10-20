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
                
                // const newItensArray = selectedCharacter.itens.map((item) => {
                //     if(item && item.id === selectedCharacterSlot.id){
                //         return  selectedItemFromList;
                //     } else if( typeof selectedCharacterSlot == "string" ){

                //         const newItensArray = [];

                //         const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));

                //         for(let i = 0; i<4; i++){
                //             if(i == slotPosition){
                //                 newItensArray.splice(i, 1, selectedItemFromList);
                //             } else {
                //                 newItensArray.push(selectedCharacter.itens[i]);
                //             }
                //         }

                //         console.log("ABC: ", newItensArray);

                //         updateSelectedCharacter({
                //             ...selectedCharacter,
                //             itens: newItensArray,
                //         });
                //     } else {
                //         return item;
                //     }
                // })

                // const newItensArray = selectedCharacter.itens.map((item, index) => {
                //     const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));

                //     if(!item && index == slotPosition){
                //         return selectedItemFromList;
                //     } else {
                //         return item;
                //     }
                // })

                // --------------
                // if(item && item.id === selectedCharacterSlot.id){
                //     return  selectedItemFromList;
                // } else if( typeof selectedCharacterSlot == "string" ){

                //     const newItensArray = [];

                //     const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));

                //     for(let i = 0; i<4; i++){
                //         if(i == slotPosition){
                //             newItensArray.splice(i, 1, selectedItemFromList);
                //         } else {
                //             newItensArray.push(selectedCharacter.itens[i]);
                //         }
                //     }

                //     console.log("ABC: ", newItensArray);

                //     updateSelectedCharacter({
                //         ...selectedCharacter,
                //         itens: newItensArray,
                //     });
                // } else {
                //     return item;
                // }
                // --------

                const newItensArray = [];
                console.log("ZZ: ", selectedCharacterSlot);
                

                for(let i = 0; i<4; i++){
                    if(selectedCharacter.itens[i] && selectedCharacter.itens[i].id === selectedCharacterSlot.id){
                        newItensArray.push(selectedItemFromList);
                    // } else if(i == slotPosition){
                    } else if(typeof selectedCharacterSlot == "string"){
                        const slotPosition = parseInt(selectedCharacterSlot.charAt(selectedCharacterSlot.length-1));
                        if(i == slotPosition) newItensArray.push(selectedItemFromList);
                    } else {
                        newItensArray.push(selectedCharacter.itens[i]);
                    }
                }
                
                // console.log("ZZ: ", newItensArray);

                updateSelectedCharacter({
                    ...selectedCharacter,
                    itens: newItensArray,
                });
                // setSelectedCharacterSlot(selectedItemFromList);
            }
        }
    };

    const handleUnequipItem = () => {

        const newItensArray = [...selectedCharacter.itens];

        const isAnEmptySlot = !selectedCharacterSlot.id;

        if(!isAnEmptySlot){
            console.log("ASD");
            newItensArray.forEach((item, index) => {
                if(item && item.id == selectedCharacterSlot.id){
                    newItensArray.splice(index, 1, undefined);
                }
            });
        };

        updateSelectedCharacter({
            ...selectedCharacter,
            itens: newItensArray,
        });
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