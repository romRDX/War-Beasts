import { createStore } from 'redux';

import personagens from 'Data/SandBox/Personagens'; // SANDBOX

const INITIAL_STATE = {
    user: {},
    characters: personagens,
    activeCharacter: personagens[0],
    activeMap: {nome: 'estagio 1', posicao: [7,64],  nivel: 1, inimigos: [], img: '', dificuldade: ''},
    activeStage: '',
    activeScreen: '',
    activeBattle: '',
    mapProgress: { tokens: 0, open: []},
};

function reducer( state = INITIAL_STATE , action ){

    switch(action.type){
        case 'SELECT_CHARACTER' : {
            return {
                ... state,
                activeCharacter: action.char
            }
        }

        case 'SELECT_MAP' : {
            return {
                ... state,
                activeMap: action.map
            }
        }

        case 'ENTER_STAGE' : {
            return {
                ... state,
                activeStage: action.stage
            }
        }
    }

    return state;
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;