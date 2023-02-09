import React from 'react';
import dayjs from 'dayjs';
import StyledHeader from './Header.style';

const getDateString = () => dayjs().format('DD.MM.YYYY HH:mm:ss');

const Header: React.FC = () => {
  const [dateString, setDateString] = React.useState(getDateString);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setDateString(getDateString());
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <StyledHeader>
      <p>This is Header</p>
      {dateString}
    </StyledHeader>
  );
};

export default Header;
