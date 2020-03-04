import styled from 'styled-components';

export const Menu = styled.div`

    width: 40%;
    height: inherit;
    display: flex;
    flex-direction: column;
    border-right: .5px solid lightgray;

    h1 {
        margin: 40px 0 50px;
        text-align: center;
        font-size: 90px;
        font-family: 'Teko';
    }

    .menuLink {
        width: 75%;
        padding: 15px;
        font-size: 35px;
        border-radius: 10px;
        margin: 13px auto;
        font-family: 'Piedra';
        text-decoration: none;
        text-shadow: 3px 0 0 lightgray, -3px 0 0 lightgray, 0 3px 0 lightgray, 0 -3px 0 lightgray, 2px 2px lightgray, -2px -2px 0 lightgray, 2px -2px 0 lightgray, -2px 2px 0 lightgray;
        background: #7B7167;
        color: #800000;
        box-shadow: 0px 0px 2px 1.5px black;
        cursor: pointer;
        user-select: none;

        &:hover {
            color: red;
            box-shadow: inset 0px 0px 8px 1px black;
        }
    }
    
`;

export const Background = styled.div`

    width: 60%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;


// Nosifer|Piedra|Special+Elite|Teko