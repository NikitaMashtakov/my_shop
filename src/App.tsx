import React from 'react';
import './index.css';
import {Route, Routes} from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import Router from './components/Router';
// import { Product } from './components/Product';
// import axios from 'axios'
// import { AProduct } from './models';
// import { useEffect } from 'react';
//import Cart from './components/Cart';
//import { products } from './data/products';

function App() {
  return (
    <>
    <Router />
    </>
  );
}

export default App;