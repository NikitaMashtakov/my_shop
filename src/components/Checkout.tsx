import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { ProductInCart } from "./ProductInCart"

export const Checkout = () => {
    const [value, setValue] = useState('')
    const {cartProducts} = useContext(CartContext)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    return (
        <>
        <div>
        {cartProducts && cartProducts.map(product => <ProductInCart key={product.product.id} product={product.product} quantity={product.quantity} />)}
        </div>
        <form >
            <label>Enter your e-mail address</label>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full"
                placeholder="@mail.ru"
                value={value}
                onChange={changeHandler}
            />
            
            <button className="py-2 px-4 border bg-yellow-400 hover:text-white">Checkout</button>
        </form>
        </>
    )
}

{/* <label>Enter your name</label>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full"
                placeholder="Your Name"
                value={nameValue}
                onChange={changeHandler}
            /> */}