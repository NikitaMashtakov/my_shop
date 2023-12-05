import { createContext, useState } from "react";
import { IProduct } from "../types/models";

interface ICartContext {
    cartProducts: IProduct[],
    add: () => void,
    remove: () => void,
}

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    add: () => {},
    remove: () => {},
})

export const CartState = ({children}: {children: React.ReactNode}) => {
    const [cartProducts, setCartProducts] = useState<IProduct[]>([])
    const add = () => setCartProducts({cartProducts.push()})
    const remove = () => setCartProducts()

    return (
        <CartContext.Provider value={{cartProducts, add, remove}}>
            {children}
        </CartContext.Provider>
    )
}