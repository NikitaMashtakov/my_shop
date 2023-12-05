import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductService } from "../services/product.service"
import { IProduct } from "../types/models"
import Header from "../components/Header"
import { CartContext } from "../context/CartContext"
import { ProductInCart } from "../components/ProductInCart"

const CartPage = () => {
    const {cartProducts, addProductToCart} = useContext(CartContext)
    const [products, setProducts] = useState<IProduct[]>([])
    const {id} = useParams()
    const [product, setProduct] = useState<IProduct>()
   

    
    
    return (
        <>
        <Header />
        <Link to="/"><button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white">Back</button></Link>
        <div>
            {cartProducts && cartProducts.map(product => <ProductInCart key={product.product.id} product={product.product} quantity={product.quantity} />)}
        </div>
        
        </>
    )
}

export default CartPage