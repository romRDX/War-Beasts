import React, { useContext } from 'react'

import { PersonagemMiniatura } from "./styles.js";
import PersonagensContext from 'telas/TelaPersonagens/context/PersonagensContext.js';

 const Miniatura = (props) => {
    const { selecionarPersonagem } = useContext(PersonagensContext);

    return (
        <PersonagemMiniatura onClick={() => selecionarPersonagem(props.char)}>
            <div className="info" >
                <h2>{props.char.nome}</h2>
                <h3>{props.char.classe}</h3>
                <h4> Guild </h4>
                <h5> Nv. {props.char.nivel}</h5>
            </div>
            <div className="image"></div>
        </PersonagemMiniatura>
    )
}
export default Miniatura;
