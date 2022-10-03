import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <>
      <HomeScreen />
      <Outlet />
    </>
  );
}

export default App;
