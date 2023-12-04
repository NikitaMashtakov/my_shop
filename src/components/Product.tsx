import React, {useState,useContext} from "react"
import { IProduct } from "../types/models"
import { ModalContext } from "../context/ModelContext"



interface ProductProps {
    product: IProduct
}


export function Product({product}: ProductProps) {
    return(
        <div
        key={product.id}
        className="border py-2 px-4 rounded flex flex-col items-center mb-2 hover:bg-gray-100 hover:text-green-500"
        >
            <div><img src={product.image}/></div>
            
            <div>{product.title}</div>
            <div className="font-bold bottom-0 relative"> {product.price} </div>
        </div>
    )
}

// className="bg-cover bg-no-repeat bg-center h-5/6 min-w-[100px]"
//                 style={{backgroundImage:`url(${product.image})`}}