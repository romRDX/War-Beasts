import React, { useState, useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import BattleContext from '../../context/BattleContext';
import { Container, Menu, MenuContainer, BattleLog } from './styles';

const BottomMenu = ({ logs, characterId }) => {

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
                        </Menu>
                ) }         
                
            </MenuContainer>
            <MenuContainer onClick={toggleBattleLog} >
                <h2>Log de batalha</h2>
                { openBattleLog && (
                        <BattleLog>
                            <ul>
                                { logs.length > 0 && logs.map((log) => {
                                    if(log.turnChange){
                                        return <li className="turn-divider">TURNO {log.turn}</li>
                                    } else {
                                        return <li className={ characterId === log.actionOwnership ? "player" : ""}>{log.log}</li>
                                    }
                                })}
                            </ul>
                        </BattleLog>
                ) }         
                
            </MenuContainer>
        </Container>
    )
}
    
// FAZER MENU IGUAL "MENU" FAZER O LOG APARECER NA TELA



export default BottomMenu;