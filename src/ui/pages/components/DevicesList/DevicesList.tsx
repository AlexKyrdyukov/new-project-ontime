import React from 'react';
import type { ProductType } from '../../../../api/deviceApi';

import StyledDevicesList from './DevicesList.style';
import DeviceItem from '../DeviceItem/DeviceItem';

type PropType = {
  products: ProductType[];
};

const DevicesList: React.FC<PropType> = (props) => {
  return (
    <StyledDevicesList>
      {props.products.map((item) => <DeviceItem key={item.id} device={item} />)}
    </StyledDevicesList>
  );
};

export default DevicesList;
