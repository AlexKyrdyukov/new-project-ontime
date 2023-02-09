import React from 'react';
import { useSearchParams } from 'react-router-dom';

import type { ProductType } from '../../../api/deviceApi';
import deviceApi from '../../../api/deviceApi';

import DevicesList from '../components/DevicesList/DevicesList';
import Pagination from '../components/Pagination';

import StyledMainPage from './MainPage.style';

const MainPage = () => {
  const [productsList, setProductsList] = React.useState<ProductType[]>([]);
  const [paginationData, setPaginationData] = React.useState<{ [key: string]: string }>({});
  const [searchParams] = useSearchParams();
  const limit = '5';

  const skipProducts = searchParams.get('page') ? (Number(searchParams.get('page')) - 1) * Number(limit) : '0';

  React.useEffect(() => {
    (async () => {
      const response = await deviceApi.getDevices((String(Math.ceil(+skipProducts))), limit);
      const total = response.total;
      const skip = response.skip;
      setProductsList(response.products);
      setPaginationData({
        total,
        limit,
        skip,
      });
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <StyledMainPage>
      <DevicesList
        products={productsList}
      />
      <Pagination
        paginationData={paginationData}
      />
    </StyledMainPage>
  );
};

export default MainPage;
