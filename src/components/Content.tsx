import { Product } from "./Product";
import { products } from "../data/products";
import { useEffect } from "react";
import { AProduct } from "../models";
import axios from "axios";
export default function Content() {
    async function fetchProducts() {
        const response = await axios.get<AProduct[]>('https://fakestoreapi.com/products')
        console.log(response)
      }
    useEffect(()=>{console.log('effece')}, [])
    return (
        <main>
            <div className="container mx-auto max-v-2xl pt-5 grid gap-4 grid-cols-2 grid-rows-3">
            {products.map(product => <Product product={product} key={product.id} />)}
            </div>
        </main>
    );
}