import React, { useContext } from 'react'

import { PersonagemMiniatura } from "./styles.js";
import PersonagensContext from 'telas/TelaPersonagens/context/PersonagensContext.js';

 const Miniatura = ({ character }) => {
    const { selecionarPersonagem } = useContext(PersonagensContext);

    return (
        <PersonagemMiniatura onClick={() => selecionarPersonagem(character)}>
            <div className="info" >
                <h2>{character.nome}</h2>
                <h3>{character.classe}</h3>
                <h4> Guild </h4>
                <h5> Nv. {character.nivel}</h5>
            </div>
            <div className="image"></div>
        </PersonagemMiniatura>
    )
}
export default Miniatura;
