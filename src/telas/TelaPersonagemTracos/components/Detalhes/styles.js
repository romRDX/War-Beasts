import styled from 'styled-components';



export const Container = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-right: 1px solid black;

    > div:last-child {
        height: 15%;
        display: flex;
        flex-direction: column;
        padding-top: 20px;
    }
`;

export const Portrait= styled.div`
    width: 90%;
    border: 1px solid black;
    margin: 0 auto 5% auto;
    height: 25%;
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-image: url('${props => props.img}');
    position: relative;
`;

export const Info = styled.div`
    width: 90%;
    border: 1px solid black;
    margin: 0 auto 5% auto;
    height: 50%;
    font-family: 'Teko';
`;