import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 99%;
    height: 9%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    > button {
        border: 1px solid black;
        border-radius: 10px;
        width: 27%;
        height: 75%;
        margin: auto;
        text-align: center;
    }
`;

export const MenuContainer = styled.button`
    position: relative;
`;

export const Menu = styled.div`
    position: absolute;
    bottom: 66px;
    right: 0;
    left: 0;
    border-radius: 10px;
    width: 100%;
    background: #7B7167;
    display: grid;
    gap: 5px;
    padding: 5px;
    place-items:  center;
    
    button { 
        border-radius: 10px;
        height: 40px;
        width: 97%;
        // margin: 5px auto 0 auto;
    }
`;

export const BattleLog = styled.div`
    position: absolute;
    bottom: 66px;
    right: 0;
    left: 0;
    border-radius: 10px;
    width: 100%;
    background: #7B7167;
    display: grid;
    gap: 5px;
    padding: 8px;
    place-items:  center;

    ul {
        width: 100%;
        background: #FFF;
        border-radius: 10px;
        overflow-y: scroll;
        max-height: 600px;

        li {
            font-size: 14px;
            text-align: left;
            margin: 5px;
            padding: 5px 5px 8px;
            border-bottom: 1px solid black;
        }

        li:first-child {
            border-top: 1px solid black;
        }

        li.turn-divider {
            padding: 10px 16px;
            background: #7B7167;
            font-family: "Piedra";
            text-align: center;
            font-size: 18px
            text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;
        }

        li.player {
            background: lightblue;
            color: #000;
        }
    }
`;