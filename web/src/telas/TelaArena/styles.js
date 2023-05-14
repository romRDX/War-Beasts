import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    align-items: center;

    h1 {
        font-size: 130px;
        margin-top: 40px;
    }
`;

export const Rank = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    
    border: 2px solid black;
    padding: 30px 20px;

    h2 {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    p {
        font-size: 50px;
    }
`;

export const Loading = styled.div`
    
    p {
        font-size: 25px;

    }

    div {    
        display: inline-block;
        width: 80px;
        height: 80px;
        margin: 20px 0 10px 0;
    }

    div:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid lightblue;
        border-color: lightblue transparent lightblue transparent;
        animation: lds-dual-ring 1.2s linear infinite;
    }

    @keyframes lds-dual-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;