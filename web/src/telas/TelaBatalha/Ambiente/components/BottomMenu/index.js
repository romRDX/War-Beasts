import React, { Component, useState } from 'react';

import { Conteiner, Menu } from './styles';

const BottomMenu = () => {

    const [menu, setMenu] = useState(false);
    const [battleLog, setBattleLog] = useState(false);

    const toggleMenu = () => {
        setMenu( !menu );
    }

    const toggleBattleLog = () => {
        setBattleLog( !battleLog );
    }

    return  ( 
        <Conteiner>
            <div>End Turn</div>
            <Menu onClick={toggleMenu} >
                { menu && <div className="menu"><h2>Fugir</h2><h2>Opções</h2><h2></h2></div>}
                <h2>Menu</h2>
            </Menu>
            <div onClick={toggleBattleLog} > Battle Log
                { battleLog && <div className="menu">BATTLE LOG</div>}
            </div>
        </Conteiner>
    )
}
    



export default BottomMenu;