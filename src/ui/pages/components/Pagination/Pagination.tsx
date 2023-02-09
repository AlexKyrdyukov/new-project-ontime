import React from 'react';
import { useSearchParams } from 'react-router-dom';

import StyledPagination from './Pagination.style';

type PropsType = {
  paginationData: {
    [key: string]: string;
  };
};

const Pagination: React.FC<PropsType> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [buttonsArray, setButtonArray] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!searchParams.get('page')) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    const length = Number(props.paginationData.total) / Number(props.paginationData.limit);
    const buttons = [...new Array(length || 2)].map((item, index) => index + 1);
    setButtonArray(buttons);
  }, [props]);
  const handleSearchParams = (page: number) => {
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  };

  return (
    <StyledPagination>
      <button
        onClick={
          () => handleSearchParams(Number(searchParams.get('page')) - 1)
        }
        disabled={Number(searchParams.get('page')) <= 1}
      >last
      </button>
      {buttonsArray.map((item) => (
        <button
          className={
            item === Number(searchParams.get('page'))
              ? 'active'
              : ''
          }
          onClick={
            () => handleSearchParams(item)
          }
          key={item}
        >{item}
        </button>))}
      <button
        onClick={
          () => handleSearchParams(Number(searchParams.get('page')) + 1)
        }
        disabled={Number(searchParams.get('page')) >= buttonsArray.length}
      >
        next
      </button>
    </StyledPagination>
  );
};

export default Pagination;
