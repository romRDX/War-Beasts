import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    border-top: 1px solid black;

    > div {
        height: 90px;
        width: 90px;
        margin: auto 1%;
    }
`;
