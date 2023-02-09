import React from 'react';
import StyledFooter from './Footer.style';

const Footer: React.FC = () => {
  const [size, setSize] = React.useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  React.useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const updateDimensions = () => {
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });
  };

  return (
    <StyledFooter>
      <p>This is Footer</p>
      <p>display width: {size.x}</p>
      <p>display height: {size.y}</p>
    </StyledFooter>
  );
};

export default Footer;
