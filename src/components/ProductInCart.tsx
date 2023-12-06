import { CartContext, ICartProduct } from "../context/CartContext"
import { useContext } from "react"






export function ProductInCart({product,quantity}: ICartProduct, key:any) {
    const {cartProducts,plusProduct, removeProduct, minusProduct} = useContext(CartContext)

    const clickPlus = () => {
        const prodIndex =  cartProducts.findIndex(value => value.product.id === product.id)
        plusProduct(cartProducts[prodIndex])
    }
    const clickRemove = () => {
        const prodIndex =  cartProducts.findIndex(value => value.product.id === product.id)
        removeProduct(cartProducts[prodIndex])
    }
    const clickMinus = () => {
        const prodIndex =  cartProducts.findIndex(value => value.product.id === product.id)
        minusProduct(cartProducts[prodIndex])
    }
    return(
        
        <div
        key={product.id}
        className="border py-2 px-4 rounded flex h-[100px] mb-2"
        >
            <div className="grow flex justify-center items-center "><img className="h-[80px]" src={product.image} /></div>
            <div className="text-center justify-center items-center"><p>{product.title}</p></div>
            <div className="font-bold self-center justify-center items-center"> {product.price} </div>
            <button 
                className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white justify-center items-center"
                onClick={clickMinus}
            >
                -
            </button>
            <div className="font-bold self-center justify-center items-center">{quantity}</div>
            <button 
                className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white justify-center items-center" 
                onClick={clickPlus}
            >
                    +
            </button>
            <div className="font-bold self-center justify-center items-center"> {product.price*quantity} </div>
            <button 
                className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white justify-center items-center" 
                onClick={clickRemove}
            >
                    Remove
            </button>
        </div>
    )
}