import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    border: 1px solid black;
    margin: auto;
    height: 57%;
    font-family: 'Teko';

    h1,h2,h3 {
        width: 100%;
    }

    h1 {
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    p {
        text-align: center;
    }

    p:nth-of-type(7) {
        margin: 20px 0 0 0;
    }

    div {
        display: flex;
        margin: 0 auto;
        width: fit-content;
    }

    div p {
        margin: 0 3px;
    }
`;
