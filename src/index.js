import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import { AllProvider } from './components/allContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AllProvider>
<ChakraProvider>
 <App />
  </ChakraProvider>
</AllProvider>
   
);


