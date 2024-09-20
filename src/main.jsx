import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/ui/navigation/NavigationBar';
import MuiThemeProvider from './providers/ThemeProvider';
import HomePage from './components/pages/homePage/HomePage';
import { Footer } from './components/ui/footer/Footer';
import ShopPage from './components/pages/shop/ShopePage';
import { Box } from '@mui/material';

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <NavigationBar />
        <Box component="main" flex={1}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop' element={<ShopPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </MuiThemeProvider>
  </BrowserRouter>
);