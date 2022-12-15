import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#172139',
        color: 'white',
      },
    }),
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
    color: 'white',
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
