import React from 'react'
import { Link } from 'react-router-dom';

import { Botao } from 'globalComponents/Botoes/styles';

import { Menu, Background } from "./styles.js";

const TelaMenu = (props) => {
    const buttonStyle = {
        fontSize: '30px',
        size: [75],
        margin: '15px auto'
    };

    return (
        <>
            <Menu>
                <h1>WAR BEAST</h1>
               <Botao theme={buttonStyle} ><Link to="/personagem">Personagem</Link></Botao>
               <Botao theme={buttonStyle} ><Link to="/mapas">Mapas | Jogador x Computador</Link></Botao>
               <Botao theme={buttonStyle} ><Link to="/arena">Arena | Jogador x Jogador</Link></Botao>
               <Botao theme={buttonStyle} ><Link to="/personagens">Escolher Personagens</Link></Botao>
            </Menu>
            <Background>
            </Background>
        </>
    )
};

export default TelaMenu;