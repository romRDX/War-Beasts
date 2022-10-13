import React from 'react';
import { useCharacter } from 'hooks/useCharacter';

import { Container, Atributo, Principais, Secundarios } from './styles';

const Atributos = () => {

    const { selectedCharacter } = useCharacter();

    return (
        <Container>
            <Principais>
                <Atributo className="STR" > STR : {selectedCharacter?.atributes.STR} </Atributo>
                <Atributo className="DEX" > DEX : {selectedCharacter?.atributes.DEX} </Atributo>
                <Atributo className="CON" > CON : {selectedCharacter?.atributes.CON} </Atributo>
                <Atributo className="INT" > INT : {selectedCharacter?.atributes.INT} </Atributo>
                <Atributo className="TOU" > TOU : {selectedCharacter?.atributes.TOU} </Atributo>
                <Atributo className="AGI" > AGI : {selectedCharacter?.atributes.AGI} </Atributo>
            </Principais>        
            <Secundarios>
                <Atributo className="STR" > Dano : {selectedCharacter?.atributes.STR} </Atributo>
                <Atributo className="DEXINT" > Precisão : {selectedCharacter?.atributes.INT} </Atributo>
                <Atributo className="DEX" > Chance de Critico : {selectedCharacter?.atributes.TOU} </Atributo>
                <Atributo className="STR" > Dano Critico : {selectedCharacter?.atributes.DEX} </Atributo>
                <Atributo className="STRINT" > Chance de Atordoar : {selectedCharacter?.atributes.CON} </Atributo>
                <Atributo className="DEXAGI" > Velocidade : {selectedCharacter?.atributes.AGI} </Atributo>
                <Atributo className="CONINT" > Vigor : {selectedCharacter?.atributes.AGI} </Atributo>
                <Atributo className="AGI" > Evasão : {selectedCharacter?.atributes.AGI} </Atributo>
                <Atributo className="CON" > Pontos de Vida : {selectedCharacter?.atributes.AGI} </Atributo>
                <Atributo className="TOU" > Defesa : {selectedCharacter?.atributes.AGI} </Atributo>
                <Atributo className="AGITOU" > Resistencia a Critico : {selectedCharacter?.atributes.AGI} </Atributo>
                <Atributo className="TOUCON" > Resistencia a Atordoar : {selectedCharacter?.atributes.AGI} </Atributo>
            </Secundarios>
        </Container>
    )
};

export default Atributos;
