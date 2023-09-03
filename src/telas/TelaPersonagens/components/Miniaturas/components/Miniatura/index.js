import React, { useContext } from 'react'

import { PersonagemMiniatura } from "./styles.js";
import PersonagensContext from 'telas/TelaPersonagens/context/PersonagensContext.js';

 const Miniatura = ({ character, isSelected }) => {
    const { selecionarPersonagem } = useContext(PersonagensContext);

    return (
        <PersonagemMiniatura isSelected={isSelected} onClick={() => selecionarPersonagem(character)}>
            <div className="info" >
                <h2>{character.name}</h2>
                <h3>{character.class_id}</h3>
                <h4> Guild </h4>
                <h5> Nv. {character.level}</h5>
            </div>
            <div className="image">
                <img src={character.portrait} />
                {/* parece que entrar na conta e usar alguma imagem ou pegar o link reativa */}
                {/* <img src="/game-icons/skill5.webp" /> */}
            </div>
        </PersonagemMiniatura>
    )
}
export default Miniatura;
