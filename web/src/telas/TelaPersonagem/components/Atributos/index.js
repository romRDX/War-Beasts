import React, { useMemo } from 'react';
import { useCharacter } from 'hooks/useCharacter';

import { Container, Atributo, Principais, Secundarios } from './styles';

const Atributos = () => {

    const { selectedCharacter } = useCharacter();

    const totalAtributes = useMemo(() => {
        if(selectedCharacter){
            let STR = 0;
            let DEX = 0;
            let CON = 0;
            let INT = 0;
            let TOU = 0;
            let AGI = 0;

            selectedCharacter.itens.forEach((item) => {
                STR+= item ? item.STR : 0;
                DEX+= item ? item.DEX : 0;
                CON+= item ? item.CON : 0;
                INT+= item ? item.INT : 0;
                TOU+= item ? item.TOU : 0;
                AGI+= item ? item.AGI : 0;
            });

            const totalItensAtributes = {
                itensSum: {
                    STR, 
                    DEX, 
                    CON, 
                    INT, 
                    TOU, 
                    AGI, 
                }
            };

            STR += selectedCharacter.attributes.STR;
            DEX += selectedCharacter.attributes.DEX;
            CON += selectedCharacter.attributes.CON;
            INT += selectedCharacter.attributes.INT;
            TOU += selectedCharacter.attributes.TOU;
            AGI += selectedCharacter.attributes.AGI;

            return {
                ...totalItensAtributes,
                total: {
                    STR,
                    DEX,
                    CON,
                    INT,
                    TOU,
                    AGI,
                },
            }
        } else {
            return null;
        }
    }, [selectedCharacter]);

    const secondaryAtributes = useMemo(() => {

        if(!totalAtributes) return null;
        return {
            DMG: Math.round((totalAtributes.total.STR*0.38)+40),
            PREC: Math.round((totalAtributes.total.DEX*0.3)+5+(totalAtributes.total.INT*0.42)+5),
            HP: Math.round((totalAtributes.total.CON*2.5)+900),
            DEF: Math.round((totalAtributes.total.TOU*0.062)+5),
            EVA: Math.round((totalAtributes.total.AGI*0.525)+40),
            SPEED: Math.round((totalAtributes.total.AGI*0.24)+(totalAtributes.total.DEX*0.2)),
            STA: Math.round((totalAtributes.total.CON*0.13)+(totalAtributes.total.INT*0.262)+20),
            CRITC: Math.round((totalAtributes.total.DEX*0.1)+7),
            CRITDMG: Math.round((totalAtributes.total.STR*0.12)+30),
            CRITRST: Math.round(((totalAtributes.total.TOU*0.3)+(totalAtributes.total.AGI*0.13))*0.12),
            STUNC: Math.round((totalAtributes.total.STR*0.04)+(totalAtributes.total.INT*0.09)),
            STUNRST: Math.round((totalAtributes.total.CON*0.03)+(totalAtributes.total.CON*0.03)),
        };
    }, [totalAtributes]);

    return (
        <Container>
            <Principais>
                { selectedCharacter &&
                    <>
                        <Atributo className="STR" > STR : {totalAtributes.total.STR} </Atributo>
                        <Atributo className="DEX" > DEX : {totalAtributes.total.DEX} </Atributo>
                        <Atributo className="CON" > CON : {totalAtributes.total.CON} </Atributo>
                        <Atributo className="INT" > INT : {totalAtributes.total.INT} </Atributo>
                        <Atributo className="TOU" > TOU : {totalAtributes.total.TOU} </Atributo>
                        <Atributo className="AGI" > AGI : {totalAtributes.total.AGI} </Atributo>
                    </>
                }
            </Principais>        
            <Secundarios>
                <Atributo className="STR" > Dano : {secondaryAtributes?.DMG} </Atributo>
                <Atributo className="DEXINT" > Precisão : {secondaryAtributes?.PREC} </Atributo>
                <Atributo className="DEX" > Chance de Critico : {secondaryAtributes?.CRITC} </Atributo>
                <Atributo className="STR" > Dano Critico : {secondaryAtributes?.CRITDMG} </Atributo>
                <Atributo className="STRINT" > Chance de Atordoar : {secondaryAtributes?.STUNC} </Atributo>
                <Atributo className="DEXAGI" > Velocidade : {secondaryAtributes?.SPEED} </Atributo>
                <Atributo className="CONINT" > Vigor : {secondaryAtributes?.STA} </Atributo>
                <Atributo className="AGI" > Evasão : {secondaryAtributes?.EVA} </Atributo>
                <Atributo className="CON" > Pontos de Vida : {secondaryAtributes?.HP} </Atributo>
                <Atributo className="TOU" > Defesa : {secondaryAtributes?.DEF} </Atributo>
                <Atributo className="AGITOU" > Resistencia a Critico : {secondaryAtributes?.CRITRST} </Atributo>
                <Atributo className="TOUCON" > Resistencia a Atordoar : {secondaryAtributes?.STUNRST} </Atributo>
            </Secundarios>
        </Container>
    )
};

export default Atributos;
