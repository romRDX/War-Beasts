import React from 'react';
import { useCharacter } from 'hooks/useCharacter';

import { Container } from './styles';
import { Portrait, Info, Secundarios } from './styles';

const Detalhes = () => { 

    const { selectedCharacter } = useCharacter();

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
                    </div>
                )
            }
        </Container>
    )
};

export default Detalhes;
