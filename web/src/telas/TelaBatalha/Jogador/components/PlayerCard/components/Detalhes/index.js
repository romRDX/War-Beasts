import React from 'react';

import { Container } from './styles';
import { Portrait, Info, Secundarios } from './styles';

const Detalhes = ({ player }) => { 

    return (
        <Container>
            { player.characterData && (
                    <div className='playerInfo'>
                        <Portrait img={ player.characterData.portrait }>
                        </Portrait>
                        <Info>
                            <h3> {player.characterData.name} </h3>
                            <Secundarios>
                                <h2 className="STR" > Dano : {player.characterData.attributes.STR} </h2>
                                <h2 className="DEXINT" > Precisão : {player.characterData.attributes.INT} </h2>
                                <h2 className="DEX" > C. Critico : {player.characterData.attributes.TOU} </h2>
                                <h2 className="STR" > Dano Critico : {player.characterData.attributes.DEX} </h2>
                                <h2 className="STRINT" > C. Atordoar : {player.characterData.attributes.CON} </h2>
                                <h2 className="DEXAGI" > Velocidade : {player.characterData.attributes.AGI} </h2>
                                <h2 className="CONINT" > Vigor : {player.characterData.attributes.AGI} </h2>
                                <h2 className="AGI" > Evasão : {player.characterData.attributes.AGI} </h2>
                                <h2 className="CON" > Pontos de Vida : {player.characterData.attributes.AGI} </h2>
                                <h2 className="TOU" > Defesa : {player.characterData.attributes.AGI} </h2>
                                <h2 className="AGITOU" > Resist. Critico : {player.characterData.attributes.AGI} </h2>
                                <h2 className="TOUCON" > Resist. Atordoar : {player.characterData.attributes.AGI} </h2>
                            </Secundarios>
                        </Info>
                    </div>
                )
            }
        </Container>
    )
};

export default Detalhes;
