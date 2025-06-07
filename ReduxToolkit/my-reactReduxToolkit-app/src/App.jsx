import React from 'react';
import ProductList from './productList';
import Cart from './cart';

function App() {
  return (
    <div>
      <h1>🛒 Shopping Cart</h1>
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
