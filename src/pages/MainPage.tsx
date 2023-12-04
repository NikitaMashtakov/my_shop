import React, { useContext, useEffect, useState } from 'react';
import { Product } from '../components/Product';
import { Modal } from '../components/Modal';
import { ModalContext } from '../context/ModelContext';
import Cart from "../components/Cart";
import { IProduct } from '../types/models';
import { ProductService } from '../services/product.service';
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
            <header>
                <nav className='h-[50px] flex justify-between px-5 bg-green-600 items-center text-white'>
                    <img src="way.png"></img>
                    <div>Магазин</div>
                    <div>О нас</div>
                    <div>Доставка</div>
                    <Cart />
                </nav>
            </header>

            <main>
                <div className="container mx-auto max-v-2xl pt-5 grid gap-4 grid-cols-3">
                    {products && products.map(product => <Product key={product.id} product={product}/>)}
                </div>
                
            </main>
        </>
  );
}