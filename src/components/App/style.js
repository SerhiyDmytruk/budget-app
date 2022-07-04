import styled, {createGlobalStyle} from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`;

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 15px;
    margin: 0;
    background-color: #e1e1e1;
`;

Wrapper.displayName = 'AppWrapper';