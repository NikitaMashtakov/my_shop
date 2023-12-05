import { IProduct } from "../types/models"
import { CartContext, ICartProduct } from "../context/CartContext"
import { Link } from "react-router-dom"






export function ProductInCart({product,quantity}: ICartProduct, key:any) {
    return(
        
        <div
        key={product.id}
        className="border py-2 px-4 rounded flex flex-col  mb-2"
        >
            <div className="grow flex justify-center items-center"><img src={product.image} /></div>
            <div className="text-center">{product.title}</div>
            <div className="font-bold self-center"> {product.price*quantity} </div>
            <button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white">-</button>
            <div className="text-center font-bold">{quantity}</div>
            <button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white">+</button>
            <button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white">Remove</button>
        </div>
    )
}