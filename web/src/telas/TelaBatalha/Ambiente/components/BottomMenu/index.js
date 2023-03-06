import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BattleContext from '../../context/BattleContext';
import { Container, Menu, MenuContainer } from './styles';

const BottomMenu = () => {

    const history = useHistory();
    const { handleSendEscapeMessage, handleSendTurnEndMessage } = useContext(BattleContext);

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
            <button onClick={handleSendTurnEndMessage}>Terminar Turno</button>
            <MenuContainer onClick={toggleMenu} >
                <h2>Menu</h2>
                { openMenu && (
                    <Menu>
                        <button onClick={handleSendEscapeMessage}>Fugir</button>
                        <button>Opções</button>
                    </Menu>)}
            </MenuContainer>
            <button onClick={toggleBattleLog} > Dados da batalha
                { openBattleLog && <div className="menu">BATTLE LOG</div>}
            </button>
        </Container>
    )
}
    



export default BottomMenu;