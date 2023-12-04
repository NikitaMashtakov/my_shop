import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductService } from "../services/product.service"
import { Product } from "../components/Product"
import { IProduct } from "../types/models"
import Cart from "../components/Cart"

const ProductPage = () => {
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
    
    return (
        <>
        <header>
                <nav className='h-[50px] flex justify-between px-5 bg-green-600 items-center text-white'>
                    <img src="./../way.png"></img>
                    <div>Магазин</div>
                    <div>О нас</div>
                    <div>Доставка</div>
                    <Cart />
                </nav>
            </header>
        <div>
            <div key= {product?.id} >
        <div 
            className="bg-cover bg-no-repeat bg-center h-[200px] w-[100px]"
            style={{backgroundImage: `url(${product?.image})`}}
        />
            <div >
            <h2>{product?.title}</h2>
            <p>
                {product?.price}
            </p>
            <button className="border-2 rounded-lg bg-slate-500 text-white" onClick={()=>{console.log(id)}}>Add to cart</button>
        </div>
    </div>
        </div>
        </>
    )
}

export default ProductPage