import styled from 'styled-components';

import background from './background.png';

export const Background = styled.div`

    display: block;
    background-image: url(${background});
    height: inherit;
    background-position: center center;
    background-size: cover;
    overflow: hidden;

    div:first-child {
        border-radius: 20px;
        background-color: #CD853F;
        max-width: 550px;
        padding: 40px 0px;
        margin: 305px auto 0 auto;
    }

    h1 {
        font-weight: bold;
        margin: 0 auto;
        font-size: 70px;
        text-align: center;
    }
`;
