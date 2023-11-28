import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import { Product } from './components/Product';
import axios from 'axios'
import { AProduct } from './models';
import { useEffect } from 'react';

function App() {
  async function fetchProducts() {
    const response = await axios.get<AProduct[]>('https://fakestoreapi.com/products')
    console.log(response)
  }
  useEffect(()=>{console.log('effece')}, [])

  return (
    <div></div>
  );
}

export default App;