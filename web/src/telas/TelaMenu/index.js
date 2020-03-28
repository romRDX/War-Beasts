import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import { Menu, Background } from "./styles.js";

const TelaMenu = (props) => {
    return (
        <>
            <Menu>
                <h1>WAR BEAST</h1>
                <Link className="menuLink" to="/personagem"> Personagem </Link>
                <Link className="menuLink" to="/mapas"> Mapas </Link>
                <Link className="menuLink" to="/Arena"> Arena </Link>
                <Link className="menuLink" to="/main"> Teste </Link>
                <Link className="menuLink" to="/personagens"> Escolher personagem </Link>
            </Menu>
            <Background>
            </Background>
        </>
    )
};

export default TelaMenu;