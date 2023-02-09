import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainPage from '../../pages/MainPage';
import ProductPage from '../../pages/ProductPage/ProductPage';
import StyledNavigation from './AppNavigation.style';

const AppNavigation: React.FC = () => {
  return (
    <StyledNavigation>
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/productItem/:deviceId" element={<ProductPage />} />
      </Routes>
    </StyledNavigation>
  );
};

export default AppNavigation;
