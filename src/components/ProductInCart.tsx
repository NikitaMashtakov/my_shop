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
        className="border py-2 px-4 rounded flex h-[100px] mb-2 justify-center"
        >
            <table className="table-auto">
                <tr>
                    <td><div ><img className="h-[80px]" src={product.image} /></div></td>
                    <td> <div className="mr-10 ml-10 font-bold"><p>{product.title}</p></div></td>
                    <td><div className="mr-10 ml-10 font-bold">${product.price} </div></td>
                    <td>
                        <button 
                            className="border-1 py-2 px-4 rounded-full bg-gray-400 hover:bg-gray-600 text-white justify-center items-center"
                            onClick={clickMinus}
                        >
                            -
                        </button>
                    </td>
                    <td><div className="mr-5 ml-5">{quantity}</div></td>
                    <td>
                        <button 
                        className="border-1 py-2 px-4 rounded-full bg-gray-400 hover:bg-gray-600 text-white justify-center items-center" 
                        onClick={clickPlus}
                        >
                            +
                        </button>
                    </td>
                    <td><div className="mr-10 ml-10 font-bold">${(product.price*quantity).toFixed(2)} </div></td>
                    <td>
                        <button 
                            className="border-1 py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-600 text-white justify-center items-center" 
                            onClick={clickRemove}
                        >
                            Remove
                        </button>
                    </td>
                </tr>
            </table>
            
           
            
            
            
            
            
           
        </div>
    )
}