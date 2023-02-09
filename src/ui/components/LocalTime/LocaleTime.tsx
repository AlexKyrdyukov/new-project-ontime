import React from 'react';
import dayjs from 'dayjs';

import StyledLocaleTime from './LocaleTime.style';

const getDateString = () => dayjs().format('DD.MM.YYYY HH:mm:ss');

const LocaleTime: React.FC = () => {
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
    <StyledLocaleTime>
      <p> This is LocaleTime</p>
      {dateString}
    </StyledLocaleTime>
  );
};

export default LocaleTime;
