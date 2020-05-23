import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    width: 99%;
    height: 9%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    div {
        border: 1px solid black;
        border-radius: 10px;
        width: 27%;
        height: 75%;
        margin: auto;
        text-align: center;
    }
`;

export const Menu = styled.div`

    position: relative;

    .menu {
        position: absolute;
        bottom: 0;
        height: 300px;
        width: 100%;
        margin: 0 0 12% 0;
    }

`;