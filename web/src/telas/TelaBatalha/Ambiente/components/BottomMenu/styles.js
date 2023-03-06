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