import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Info from './components/Info';

import { Botao } from 'globalComponents/Botoes/styles';
import { Container, Portrait } from './styles';
import characterSkillsContext from 'telas/TelaPersonagemHabilidades/context/characterSkillsContext';


const Detalhes = () => {
    const { selectedSkill, handleEquipSkill, handleUnequipSkill } = useContext(characterSkillsContext);

    return (
        <Container>
            <Link className="voltar" to="/personagem">Voltar</Link>
            <Portrait img={selectedSkill?.icon} />
            <Info />
            <div>
                <Botao theme={{size:[60,30], margin: '0 auto 15px'}} onClick={() => { handleEquipSkill() } }> Equipar </Botao>
                <Botao theme={{size:[60,30], margin: '0 auto 15px'}} onClick={() => { handleUnequipSkill() } }> Desequipar </Botao>
            </div>
        </Container>
    )
    
};

export default Detalhes;