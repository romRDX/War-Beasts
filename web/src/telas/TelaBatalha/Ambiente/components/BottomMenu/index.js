import React, { useState, useCallback } from 'react';

import { Container, Menu } from './styles';

const BottomMenu = () => {

    const [openMenu, setOpenMenu] = useState(false);
    const [openBattleLog, setOpenBattleLog] = useState(false);

    const toggleMenu = useCallback( () => {
        setOpenMenu(oldMenu => !oldMenu );
    },[]);

    const toggleBattleLog = useCallback( () => {
        setOpenBattleLog( oldBattleLog => !oldBattleLog);
    },[]);

    return  ( 
        <Container>
            <div>End Turn</div>
            <Menu onClick={toggleMenu} >
                { openMenu && <div className="menu"><h2>Fugir</h2><h2>Opções</h2></div>}
                <h2>Menu</h2>
            </Menu>
            <div onClick={toggleBattleLog} > Battle Log
                { openBattleLog && <div className="menu">BATTLE LOG</div>}
            </div>
        </Container>
    )
}
    



export default BottomMenu;