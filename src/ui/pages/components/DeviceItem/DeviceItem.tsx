import React from 'react';
import { Link } from 'react-router-dom';

import type { ProductType } from '../../../../api/productApi';

import StyledDeviceItem from './DeviceItem.style';

type PropsType = {
  device: ProductType;
};

const DeviceItem: React.FC<PropsType> = (props) => {
  return (
    <StyledDeviceItem>
      <div>
        <Link
          to={`/productItem/${props.device.id}`}
        >
          <img
            className="device-image"
            src={props.device.thumbnail} alt="device"
          />
        </Link>
        <span>Category: {props.device.category}</span>
        <span>Price: {props.device.price}</span>
        <span>Discount: {props.device.discountPercentage}</span>
        <span>Raitins: {props.device.rating}</span>
      </div>
    </StyledDeviceItem>
  );
};

export default DeviceItem;
