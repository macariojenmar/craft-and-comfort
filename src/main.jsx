import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/ui/navigation/NavigationBar';
import MuiThemeProvider from './providers/ThemeProvider';
import HomePage from './components/pages/homePage/HomePage';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </MuiThemeProvider>
  </BrowserRouter>
);