import React, {useState} from "react"
import { AProduct } from "../models"
import Button from '@mui/material/Button';


interface ProductProps {
    product: AProduct
}


export function Product({product}: ProductProps) {
    const [details, setDetails] = useState(false)
    const btnClassName = details ? 'bg-yellow-400' : 'bg-blue-400'
    const btnClasses = ['py-2 px-4 border', btnClassName]
    return(
        <div
        className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={product.image} className="w-1/6" alt={product.title}></img>
            <p>{product.title}</p>
            <p className="font-bold"> {product.price} </p>
            <button 
            className={btnClasses.join(' ')}
            onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide details' : 'Show details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
            </div>}
        </div>
    )
}