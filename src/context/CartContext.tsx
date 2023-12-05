import { createContext, useState } from "react";
import { IProduct } from "../types/models";

interface ICartContext {
    cartProducts: IProduct[],
    add: (product: IProduct) => void,
    //remove: () => void,
}

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    add: (product: IProduct) => {},
    //remove: () => {},
})


export const CartState = ({children}: {children: React.ReactNode}) => {
    const [cartProducts, setCartProducts] = useState<IProduct[]>([])
    const add = (product: IProduct) => setCartProducts(cartProducts => [...cartProducts, product])
   // const remove = () => setCartProducts()

    return (
        <CartContext.Provider value={{cartProducts, add}}>
            {children}
        </CartContext.Provider>
    )
}