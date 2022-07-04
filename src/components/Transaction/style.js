import styled from 'styled-components';

export const Wrapper = styled.div`
border: ${props => props.value < 15 ? '1px solid tomato' : '1px solid darkcyan'};
margin: 10px 10px 10px 0;
padding: 10px;
border-radius: 5px;
width: 100%;
max-width: 250px;

p {
    margin-bottom: 0;
}
`;


Wrapper.displayName = 'TransactionWrapper';