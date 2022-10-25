import React, { useEffect, useState, useContext} from 'react';
import ListaIcones from 'globalComponents/ListaIcones/index.js';
import { apiWB } from 'services/axios.js';
import CharacterTraitsContext from 'telas/TelaPersonagemTracos/context/characterTraitsContext.js';

import { Container } from './styles.js';

const Traits = () => {

    const { selectedTraitFromList, setSelectedTraitFromList, setSelectedTrait } = useContext(CharacterTraitsContext);

    const [traits, setTraits] = useState(null);

    useEffect(() => {
        apiWB.get('/traits').then((resp) => {
            setTraits(resp.data.traits);
        });
    }, []);
    

    return (
        <Container>
            {
                traits && <ListaIcones dados={traits} selected={selectedTraitFromList} setSelectedItemFromList={setSelectedTraitFromList} setSelected={setSelectedTrait} />
            }
        </Container>
    ) 
}

export default Traits;