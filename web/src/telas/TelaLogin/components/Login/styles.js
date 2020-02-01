import styled from 'styled-components';

export const FormLogin = styled.form`
    
    display: flex;
    flex-direction: column;
    max-width: 300px;
    margin: 50px auto 0 auto;

    label {
        margin: 0 0 4px 0;
        font-weight: bold;
        font-size: 14px;
    };

    input {
        border: 1.2px solid lightgray;
        border-radius: 5px;
        padding: 8px;
        margin: 0 0 15px 0;
        font-size: 14px;
    };

    button {
        border-radius: 6px;
        padding: 7px;
        min-width: 200px;
        margin: 0 auto;
        font-weight: bold;
        font-size: 17px;
    };

    button:focus {
        outline:0;
    }
`;