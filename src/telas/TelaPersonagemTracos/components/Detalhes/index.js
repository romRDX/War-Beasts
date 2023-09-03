import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Info from './components/Info';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait } from './styles';
import ChatarcterTraitContext from 'telas/TelaPersonagemTracos/context/characterTraitsContext';


const Detalhes = (props) => {
    const history = useHistory();
    const { selectedTrait, handleEquipTrait, handleUnequipTrait } = useContext(ChatarcterTraitContext);

    return (
        <Container>
            <Link className="voltar" to="/personagem">Voltar</Link>
            <Portrait img={selectedTrait?.icon} />
            <Info />
            <div>
                <Botao theme={{size:[60,30], margin: '0 auto 15px'}} onClick={() => { handleEquipTrait() } }> Equipar </Botao>
                <Botao theme={{size:[60,30], margin: '0 auto 15px'}} onClick={() => { handleUnequipTrait() } }> Desequipar </Botao>
            </div>
        </Container>
    )
    
};

export default Detalhes;