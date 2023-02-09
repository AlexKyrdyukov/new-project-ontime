import React from 'react';
import LocaleTime from '../../components/LocalTime/LocaleTime';

import StyledHeader from './Header.style';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <p>This is Header</p>
      <LocaleTime />
    </StyledHeader>
  );
};

export default Header;
