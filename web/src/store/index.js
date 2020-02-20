import { createStore } from 'redux';

const INITIAL_STATE = {
    user: {},
    characters: [
        {id: 2536734, nome: 'Renekton', nivel: 10, classe: 'Crocodilo', atributos: {STR: 5, DEX: 4, CON: 4, INT: 1, TOU: 2, AGI: 3}},
        {id: 6724536, nome: 'Elise', nivel: 5, classe: 'Aranha', atributos: {STR: 3, DEX: 7, CON: 3 , INT: 4, TOU: 5, AGI: 6}},
        {id: 4574335, nome: 'Warwick', nivel: 7, classe: 'Lobo', atributos: {STR: 5, DEX: 3, CON: 5 , INT: 7, TOU: 8, AGI: 9}},
        {id: 3685846, nome: 'Aurelion', nivel: 2, classe: 'Dragão', atributos: {STR: 5, DEX: 3, CON: 5 , INT: 7, TOU: 8, AGI: 9}},
    ],
    activeCharacter: '',
    activeMap: '',
    activeStage: '',
    activeScreen: '',
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