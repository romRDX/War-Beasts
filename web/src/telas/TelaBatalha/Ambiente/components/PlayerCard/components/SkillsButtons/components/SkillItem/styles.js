import styled from 'styled-components';

export const Container = styled.button`
    position: relative;
    height: 90px;
    width: 90px;
    margin: auto;
    padding: 0;
    border: 0;

    img {
        width: 100%;
        height: 100%;
    }

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

    div {
        position: absolute;
        top: -123px;
        left: 55px;
        width: 150px;
        padding: 10px;
        border-radius: 10px;
        border: 5px solid black;
        background: lightgray;
        text-align: center;
        display: none;
        z-index: 1;
        font-family: 'Piedra';
        text-shadow: 3px 0 0 lightgrey, -3px 0 0 lightgrey, 0 3px 0 lightgrey, 0 -3px 0 lightgrey, 2px 2px lightgrey, -2px -2px 0 lightgrey, 2px -2px 0 lightgrey, -2px 2px 0 lightgrey;

        h3 {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 5px;
        }

        p {
            font-size: 16px;
        }
    }

    &:hover div {
        display: block;
    }
`;