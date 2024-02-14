import React, {useCallback} from 'react';

import items from 'Data/Items';

import { Container, Container2, BotaoAlterar } from './styles';
import ListaIcones from 'globalComponents/ListaIcones';
import { useHistory } from 'react-router-dom';
import { useCharacter } from 'hooks/useCharacter';
import { Botao } from 'globalComponents/Botoes/styles';

const Caracteristicas = () => {
    const history = useHistory();

    const { selectedCharacter } = useCharacter();

    const goToDetails = useCallback( (screen) => {
        history.push(`/personagem/${screen}`);
    },[history]);

    return (
        <Container>
            <Container2>
                <ListaIcones showOnly dados={ selectedCharacter?.itens }/>
                <Botao theme={{size:[30,30], margin: '0 0 0 auto'}} onClick={() => { goToDetails('items') } }> Alterar items </Botao>
            </Container2>

            <Container2>
                <ListaIcones showOnly dados={ selectedCharacter?.skills}/>
                <Botao theme={{size:[30,30], margin: '0 0 0 auto'}} onClick={() => { goToDetails('habilidades') } }> Alterar habilidades </Botao>
            </Container2>

            <Container2>
                <ListaIcones showOnly dados={ selectedCharacter?.traits}/>
                <Botao theme={{size:[30,30], margin: '0 0 0 auto'}} onClick={() => { goToDetails('tracos') } }> Alterar traços </Botao>
            </Container2>
        </Container>
    )
};

export default Caracteristicas;