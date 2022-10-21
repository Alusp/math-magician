import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CalculatorScreen from './pages/CalculatorScreen';
import NavigationBar from './components/NavigationBar';
import QoutesScreen from './pages/QoutesScreen';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/calculator" element={<CalculatorScreen />} />
        <Route path="/quote" element={<QoutesScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
