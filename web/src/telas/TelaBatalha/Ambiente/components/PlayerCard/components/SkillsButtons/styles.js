import styled from 'styled-components';

export const Container = styled.div`

    border: 1px solid black;
    border-radius: 10px;
    height: 65%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1% 0 0 0;
`;

export const Buttons = styled.div`

    height: 69%;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    width: 100%;
    padding: 15px 5px;

    img {
        width: 140%;
    }

`;

export const Skill = styled.div`
    position: relative;
    height: fit-content;
    margin: auto;

    h2 {
        text-align: center;
        position: absolute;
        right: 10px;
        top: -10px;
        border-radius: 50%;
        background: black;
        color: yellow;
        padding: 3%;
    }
`;


export const EnergyBar = styled.div`

    width: 100%;
    height: 30%;
    border-top: 1px solid black;
    border-radius: 0;
    position: relative;
    display: flex;

    .skill {
        width: 30%;
        height: 90%;
        margin: auto;
        border-radius: 40px;
        border: 1px solid black;
    }

    .bar {
        width: 55%;
        background: yellow;
        height: 40%;
        margin: auto;
        border: 1px solid gray;
    }
`;