import { createContext, useState } from 'react'
import { IProduct } from '../types/models'

interface ICartContext {
	cartProducts: ICartProduct[]
	addProductToCart: (product: IProduct) => void
	plusProduct: (product: ICartProduct) => void
	removeProduct: (product: ICartProduct) => void
	minusProduct: (product: ICartProduct) => void
}
export interface ICartProduct {
	product: IProduct
	quantity: number
}

export const CartContext = createContext<ICartContext>({
	cartProducts: [],
	addProductToCart: (product: IProduct) => {},
	plusProduct: (product: ICartProduct) => {},
	removeProduct: (product: ICartProduct) => {},
	minusProduct: (product: ICartProduct) => {},
})

export const CartState = ({ children }: { children: React.ReactNode }) => {
	const [cartProducts, setCartProducts] = useState<ICartProduct[]>([])
	const plusProduct = (product: ICartProduct) => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.product.id,
		)
		const newProductInCart = {
			...cartProducts[prodIndex],
			quantity: cartProducts[prodIndex].quantity + 1,
		}
		const newCartProducts = cartProducts.slice()
		newCartProducts.splice(prodIndex, 1, newProductInCart)
		setCartProducts(newCartProducts)
	}
	const removeProduct = (product: ICartProduct) => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.product.id,
		)
		const newCartProducts = cartProducts.slice()
		newCartProducts.splice(prodIndex, 1)
		setCartProducts(newCartProducts)
	}
	const minusProduct = (product: ICartProduct) => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.product.id,
		)
		if (cartProducts[prodIndex].quantity > 1) {
			const newProductInCart = {
				...cartProducts[prodIndex],
				quantity: cartProducts[prodIndex].quantity - 1,
			}
			const newCartProducts = cartProducts.slice()
			newCartProducts.splice(prodIndex, 1, newProductInCart)
			setCartProducts(newCartProducts)
		} else {
			removeProduct(product)
		}
	}
	const addProductToCart = (product: IProduct, quantity = 1) => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.id,
		)
		if (prodIndex < 0) {
			const newProductInCart = {
				product,
				quantity: quantity,
			}
			setCartProducts([...cartProducts, newProductInCart])
		} else {
			plusProduct(cartProducts[prodIndex])
		}
	}
	//const add = (product: IProduct) => setCartProducts(addProductToCart(product))
	// const remove = () => setCartProducts()

	return (
		<CartContext.Provider
			value={{
				cartProducts,
				addProductToCart,
				plusProduct,
				removeProduct,
				minusProduct,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}
