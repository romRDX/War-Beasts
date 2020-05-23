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
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-evenly;

    .skill {
        border: 1px solid black;
        border-radius: 50%;
        width: 22%;
        height: 30%;
        margin:  .5% 2%;
    }

`;

export const Skill = styled.div`
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('${props => props.icone}');
    position: relative;

    h2 {
        text-align: center;
        position: absolute;
        right: -10%;
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