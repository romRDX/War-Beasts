import React, { useContext, useMemo } from 'react';
import { useCharacter } from 'hooks/useCharacter';
import BattleContext from 'telas/TelaBatalha/Ambiente/context/BattleContext';

import { Container } from './styles';
import { Portrait, Info, Life, Secundarios } from './styles';

const Detalhes = () => { 

    const { selectedCharacter } = useCharacter();
    const { battleState } = useContext(BattleContext);

    const percentageHP = useMemo(() => {
        const characterMaxHP = battleState.characterData?.HP;
        const characterCurrentHP = battleState.characterInitialData?.HP;

        if(characterMaxHP && characterCurrentHP){
            const finalHP = characterMaxHP*100/characterCurrentHP;

            if(finalHP < 0){
                return 0;
            } else {
                return finalHP    
            };
        } else {
            return 100;
        }
    }, [battleState]);

    console.log("ASD: ", percentageHP);

    return (
        <Container>
            { selectedCharacter && (
                    <div className='playerInfo'>
                        <Portrait img={ selectedCharacter.portrait }>
                        </Portrait>
                        <Info>
                            <h3> {selectedCharacter.name} </h3>
                            <Secundarios>
                                <h2 className="STR" > Dano : {selectedCharacter.atributes.STR} </h2>
                                <h2 className="DEXINT" > Precisão : {selectedCharacter.atributes.INT} </h2>
                                <h2 className="DEX" > C. Critico : {selectedCharacter.atributes.TOU} </h2>
                                <h2 className="STR" > Dano Critico : {selectedCharacter.atributes.DEX} </h2>
                                <h2 className="STRINT" > C. Atordoar : {selectedCharacter.atributes.CON} </h2>
                                <h2 className="DEXAGI" > Velocidade : {selectedCharacter.atributes.AGI} </h2>
                                <h2 className="CONINT" > Vigor : {selectedCharacter.atributes.AGI} </h2>
                                <h2 className="AGI" > Evasão : {selectedCharacter.atributes.AGI} </h2>
                                <h2 className="CON" > Pontos de Vida : {selectedCharacter.atributes.AGI} </h2>
                                <h2 className="TOU" > Defesa : {selectedCharacter.atributes.AGI} </h2>
                                <h2 className="AGITOU" > Resist. Critico : {selectedCharacter.atributes.AGI} </h2>
                                <h2 className="TOUCON" > Resist. Atordoar : {selectedCharacter.atributes.AGI} </h2>
                            </Secundarios>
                        </Info>
                        <Life percentageHP={percentageHP}>
                            <div />
                        </Life>
                    </div>
                )
            }
        </Container>
    )
};

export default Detalhes;
