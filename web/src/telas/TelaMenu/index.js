import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import MapaEstagios from './components/mapaEstagios';

import { Menu, Background } from "./styles.js";

const TelaMenu = (props) => {
    const [ selectedMap, setSelectedMap] = useState(false);

    const showStages = () => {
        setSelectedMap( !selectedMap );
    }

    return (
        <>
            <Menu>
                <h1>WAR BEAST</h1>
                <Link className="menuLink" to="/personagem">Personagem</Link>
                <div className="menuLink" onClick={showStages}>Mapa</div>
                <Link className="menuLink" to="/Arena">Arena</Link>
                <Link className="menuLink" to="/main">Teste</Link>
                <Link className="menuLink" to="/personagens">Escolher personagem</Link>
            </Menu>
            <Background>
                { selectedMap && <MapaEstagios /> }
            </Background>
        </>
    )
    
};

export default TelaMenu;