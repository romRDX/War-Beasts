import styled from 'styled-components';

export const Container = styled.div`

    width: 49%;
    height: 49%;
    border: 1px solid black;
    // padding: 8px;
    border-radius: 10px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Container2 = styled.div`
    border: 1px solid black;
    box-sizing: border-box;
    padding: 8px;
    border-radius: 10px;
    display: flex;
    // flex-direction: column;
    height: 32%;
    justify-content: flex-start;
    align-items: center;

    // div {
    //     display: flex;
    //     gap: 8px;

    //     > div {
    //         width: 80px;
    //         height: 80px;
    //     }
    // }

    h1 {
        width: 100%;
        margin-bottom: 10px;
    }
`;