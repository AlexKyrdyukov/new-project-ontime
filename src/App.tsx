import React from 'react';

import Header from './ui/containers/Header/Header';
import Footer from './ui/containers/Footer/Footer';
import AppNavigation from './ui/containers/AppNavigation';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <AppNavigation />
      <Footer />
    </>
  );
};

export default App;
