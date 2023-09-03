import styled from 'styled-components';

export const Box = styled.div`

    display: flex;
    flex-direction: column;
    width: 49%;
    height: 49%;
    justify-content: space-evenly;
    border: 1px solid black;
    padding: 8px;
    border-radius: 10px;
    margin: auto;

    div {
        border: 1px solid black;
        border-radius: 5px;
        padding: 8px 15px;
        font-size: 25px;
        text-transform: uppercase;
    }
`;

export const Status = styled.div`

`;