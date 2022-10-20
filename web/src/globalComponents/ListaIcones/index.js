import React from 'react';

import { Dado } from './styles';

const ListaIcones = ({dados, slots, selected, setSelectedItemFromList, setSelected, showOnly = false}) => {

    const maxItemSlots = 4;

    const renderSlots = () => {
        let itens = [];
        
        if(dados && dados.length > 1){
            for(let i = 0; i<maxItemSlots; i++){
                if(dados[i]){
                    itens.push(<Dado key={dados[i].id} icon={ dados[i].icon } onClick={ () => {
                        if(!showOnly){
                            setSelected(dados[i]);
                            setSelectedItemFromList(dados[i]);
                        }
                    } } isSelected={selected?.id === dados[i].id} />);
                } else {
                    itens.push(<Dado key={'empty-slot-'+i} onClick={ () => {
                        if(!showOnly){
                            setSelected(dados[i]);
                            setSelectedItemFromList('empty-slot-'+i);
                        }
                    } } isSelected={selected === 'empty-slot-'+i} />);
                }
            }
        }

        return itens;
    };

    const renderIcons = () => {
        return dados && dados.map((dado, index) => {
            if(dado){
                return <Dado key={dado.id} icon={ dado.icon } onClick={ () => {
                    if(!showOnly){
                        setSelected(dado);
                        setSelectedItemFromList(dado);
                    }
                } } isSelected={selected?.id === dado.id} />
            } else {
                return <Dado key={'empty-slot-'+index} onClick={ () => {
                    if(!showOnly){
                        setSelected(dados[index]);
                        setSelectedItemFromList('empty-slot-'+index);
                    }
                } } isSelected={selected === 'empty-slot-'+index} />
            }
        })
    }

    return (
        <> { slots ? renderSlots() : renderIcons() } </>
    )
};

export default ListaIcones;