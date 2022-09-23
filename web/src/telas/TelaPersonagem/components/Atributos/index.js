import React from 'react';
import { useCharacter } from 'hooks/useCharacter';

import { Container, Atributo, Principais, Secundarios } from './styles';

const Atributos = () => {

    const { selectedCharacter } = useCharacter();

    return (
        <Container>
            <Principais>
                <Atributo className="STR" > STR : {selectedCharacter?.atributos.STR} </Atributo>
                <Atributo className="DEX" > DEX : {selectedCharacter?.atributos.DEX} </Atributo>
                <Atributo className="CON" > CON : {selectedCharacter?.atributos.CON} </Atributo>
                <Atributo className="INT" > INT : {selectedCharacter?.atributos.INT} </Atributo>
                <Atributo className="TOU" > TOU : {selectedCharacter?.atributos.TOU} </Atributo>
                <Atributo className="AGI" > AGI : {selectedCharacter?.atributos.AGI} </Atributo>
            </Principais>        
            <Secundarios>
                <Atributo className="STR" > Dano : {selectedCharacter?.atributos.STR} </Atributo>
                <Atributo className="DEXINT" > Precisão : {selectedCharacter?.atributos.INT} </Atributo>
                <Atributo className="DEX" > Chance de Critico : {selectedCharacter?.atributos.TOU} </Atributo>
                <Atributo className="STR" > Dano Critico : {selectedCharacter?.atributos.DEX} </Atributo>
                <Atributo className="STRINT" > Chance de Atordoar : {selectedCharacter?.atributos.CON} </Atributo>
                <Atributo className="DEXAGI" > Velocidade : {selectedCharacter?.atributos.AGI} </Atributo>
                <Atributo className="CONINT" > Vigor : {selectedCharacter?.atributos.AGI} </Atributo>
                <Atributo className="AGI" > Evasão : {selectedCharacter?.atributos.AGI} </Atributo>
                <Atributo className="CON" > Pontos de Vida : {selectedCharacter?.atributos.AGI} </Atributo>
                <Atributo className="TOU" > Defesa : {selectedCharacter?.atributos.AGI} </Atributo>
                <Atributo className="AGITOU" > Resistencia a Critico : {selectedCharacter?.atributos.AGI} </Atributo>
                <Atributo className="TOUCON" > Resistencia a Atordoar : {selectedCharacter?.atributos.AGI} </Atributo>
            </Secundarios>
        </Container>
    )
};

export default Atributos;
