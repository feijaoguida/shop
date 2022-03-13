import React from 'react';
import './App.css';
import Routers from './routes';

import { CartProvider } from '../src/contexts/CartContext';

function App() {
  return (
    <CartProvider>
      <Routers />

    </CartProvider>
  );
}

export default App;
