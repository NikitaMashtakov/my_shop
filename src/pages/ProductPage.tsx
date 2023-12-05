import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ProductService } from "../services/product.service"
import { IProduct } from "../types/models"
import Header from "../components/Header"
import { CartContext } from "../context/CartContext"

const ProductPage = () => {
    const {cartProducts, add} = useContext(CartContext)
    const [products, setProducts] = useState<IProduct[]>([])
    const {id} = useParams()
    const [product, setProduct] = useState<IProduct>()
    useEffect(()=>{
        if (!id) return
        const fetchData = async () => {
          const data = await ProductService.getById(Number(id))
          setProduct(data)
        }
    
        fetchData()
      }, [id])
    function handleAddToCartClick() {
        if (product) {
            add(product)
            console.log(cartProducts)
        }
    }

    
    
    return (
        <>
        <Header />
        <Link to="/"><button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white">Back</button></Link>
        <div key= {product?.id} className="border py-2 px-4 rounded flex flex-col  m-2 grid gap-4 grid-cols-2">
            <div className="grow flex justify-center items-center"><img src={product?.image} /></div>
            <div >
                <h2 className="font-bold">{product?.title}</h2>
                <p>{product?.description}</p>
                <p className="font-bold">
                    ${product?.price}
                </p>
                <button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white" onClick={handleAddToCartClick}>Add to cart</button>
            </div>
        </div>
        
        </>
    )
}

export default ProductPage