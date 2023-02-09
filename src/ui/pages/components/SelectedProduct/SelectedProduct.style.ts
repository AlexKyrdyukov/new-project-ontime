import styled from 'styled-components';

const StyledSelectedProduct = styled.div`
  
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .select-product__image {

    border-radius: 16px;
    margin: 20px;
  }

  & p {
    padding: 20px;
    color: violet;
    font-size: 22px;
  }
`;

export default StyledSelectedProduct;
