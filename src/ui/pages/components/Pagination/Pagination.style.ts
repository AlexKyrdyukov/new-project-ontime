import styled from 'styled-components';

const StyledPagination = styled.div`
 & button {
  background-color: yellow;
  padding: 20px;
  border-radius: 16px;
  margin-right: 10px;
 }

 .active{
    background-color: green;
    color: red;
  }

 .disabled {
  background-color: violet;
 }
`;

export default StyledPagination;
