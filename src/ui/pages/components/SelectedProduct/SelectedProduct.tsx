import React from 'react';
import type { ProductType } from '../../../../api/deviceApi';

import StyledSelectedProduct from './SelectedProduct.style';

type PropsType = {
  device: ProductType | null;
};

const SelectedProduct: React.FC<PropsType> = (props) => {
  return (
    <StyledSelectedProduct>
      {props.device?.images.map((item) => <img src={item} key={item} alt="image" />)}
      <p>Brand: {props.device?.brand}</p>
      <p>Category: {props.device?.category}</p>
      <p>Description: {props.device?.description}</p>
      <p>Raiting: {props.device?.rating}</p>
      <p>Title: {props.device?.title}</p>
      <p>Stock:{props.device?.stock}</p>
      <p>Price: {props.device?.price}</p>
    </StyledSelectedProduct >
  );
};

export default SelectedProduct;
