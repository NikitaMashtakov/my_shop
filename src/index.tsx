import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CartState } from './context/CartContext';
import { ModalState } from './context/ModalContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CartState>
        <ModalState>
      <App />
      </ModalState>
    </CartState>
  </React.StrictMode>
);

