import React, { useContext, useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { Modal } from '../components/Modal';
import { CartContext } from '../context/CartContext';
import Cart from "../components/Cart";
import { IProduct } from '../types/models';
import { ProductService } from '../services/product.service';
import Header from '../components/Header';
//import styles from './../index.css'

export function MainPage() {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            const data = await ProductService.getAllProducts()
            setProducts(data)
        }
        fetchData()
    }, [])

 

    return (
        <>
            <Header />

            <main>
                <div className="container mx-auto max-v-2xl pt-5 grid gap-4 grid-cols-3">
                    {products && products.map(product => <Product key={product.id} product={product}/>)}
                </div>
                
            </main>
        </>
  );
}