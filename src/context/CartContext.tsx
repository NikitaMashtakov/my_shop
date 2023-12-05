import { createContext, useState } from "react";
import { IProduct } from "../types/models";

interface ICartContext {
    cartProducts: ICartProduct[],
    addProductToCart: (product: IProduct) => void,
    //remove: () => void,
}
export interface  ICartProduct {
    product: IProduct,
    quantity: number,
}

export const CartContext = createContext<ICartContext>({
    cartProducts: [],
    addProductToCart: (product: IProduct) => {},
    //remove: () => {},
})


export const CartState = ({children}: {children: React.ReactNode}) => {
    const [cartProducts, setCartProducts] = useState<ICartProduct[]>([])
    const addProductToCart = (product: IProduct, quantity = 1) => {
        const prodIndex =  cartProducts.findIndex(value => value.product.id === product.id)
        if (prodIndex < 0) {
            const newProductInCart = {
                product,
                quantity: quantity
            }
            setCartProducts([...cartProducts, newProductInCart])
        } else {
            const newProductInCart = {
                ...cartProducts[prodIndex],
                quantity: cartProducts[prodIndex].quantity + 1
            }
            const newCartProducts = cartProducts.slice()
            newCartProducts.splice(prodIndex, 1, newProductInCart)
            setCartProducts(newCartProducts)
        }
    }
    //const add = (product: IProduct) => setCartProducts(addProductToCart(product))
   // const remove = () => setCartProducts()

    return (
        <CartContext.Provider value={{cartProducts, addProductToCart}}>
            {children}
        </CartContext.Provider>
    )
}