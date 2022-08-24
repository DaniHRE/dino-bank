import React from 'react'
import ReactDOM from 'react-dom/client'
import { Bundler } from './Bundler'
// import { MantineProvider } from '@mantine/core';
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Bundler />
  </React.StrictMode >
)
