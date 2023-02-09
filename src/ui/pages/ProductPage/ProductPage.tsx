import React from 'react';
import { useParams } from 'react-router-dom';

import SelectedProduct from '../components/SelectedProduct';
import type { ProductType } from '../../../api/productApi';
import deviceApi from '../../../api/productApi';

import StyledProductPage from './ProductPage.style';

const ProductPage: React.FC = () => {
  const [device, setDevice] = React.useState<ProductType | null>(null);
  const { deviceId } = useParams();

  React.useEffect(() => {
    (async () => {
      const response = await deviceApi.getById(Number(deviceId));

      setDevice(response);
    })();
  }, [deviceId]);

  return (
    <StyledProductPage>
      <SelectedProduct device={device} />
    </StyledProductPage>
  );
};

export default ProductPage;
