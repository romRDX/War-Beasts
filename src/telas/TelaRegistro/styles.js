import styled from 'styled-components';

import background from './background.png';

export const Background = styled.div`

    display: block;
    background-image: url(${background});
    height: inherit;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    width: 100%;
    display: flex;
    font-family: 'Teko'; 
`;

export const Container = styled.div`
    border-radius: 20px;
    background-color: #CD853F;
    width: 35%;
    padding: 40px 0px;
    margin: auto;

    h1 {
        font-weight: bold;
        margin: 0 auto;
        font-size: 80px;
        text-align: center;
    }
`;

export const Container2 = styled.div`
    display: flex;
    padding: 3% 0;

    form {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        div {
            width: 55%;
            margin: 8px auto;
            display: flex;
            flex-direction: column;
        }

        button {
            margin: 20px auto;
        }
    }
`;