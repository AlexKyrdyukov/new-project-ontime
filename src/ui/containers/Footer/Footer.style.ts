import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  color: blue;
  align-items: center;
  background-color: green;
  padding: 40px;

  & p {
    font-weight: 500;
    font-size: 28px;
  }
`;

export default StyledFooter;
