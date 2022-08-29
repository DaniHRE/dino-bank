// REACT IMPORTS
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// STYLE IMPORTS
import { MantineProvider } from '@mantine/core';
import './index.css'

// PAGES
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

const rootElement = document.getElementById("root");
render(
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light' }} >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  </MantineProvider >,
  rootElement
);