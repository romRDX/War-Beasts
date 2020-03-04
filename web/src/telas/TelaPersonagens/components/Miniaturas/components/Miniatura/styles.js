import styled from 'styled-components';

export const PersonagemMiniatura = styled.div`

    border: 1px solid black;
    border-radius: 10px;
    padding: 0px;
    max-width: 60%;
    display: flex;
    flex-direction: row;
    margin: 15px auto;
    max-height: 131px;
    cursor: pointer;

 
    .image {
        max-width:55%;
        width: 100%;
        border-left: 1px solid black;
    }

    .info {

        min-width: 45%;
        padding: 8px 0 8px 15px;

        h2 {
            font-size: 25px;
            font-family: 'Piedra';
        }

        h3, h4 {
            font-size: 20px;
            font-family: 'Teko';
        }

        h5 {
            font-size: 18px;
            font-weight: bold;
            font-family: 'Teko';
        }

        * {
            margin: 4px 0 7px 0;
        }
    }  
`;