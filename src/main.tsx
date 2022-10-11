import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';

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