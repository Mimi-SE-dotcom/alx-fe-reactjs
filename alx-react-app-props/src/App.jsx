import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserContext from './components/UserContext';

function App() {
  const userData = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    bio: 'Frontend Developer at ALX'
  };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <Footer />
    </UserContext.Provider>
  );
}

export default App;