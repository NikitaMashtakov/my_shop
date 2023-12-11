import { CartContext, ICartProduct } from '../context/CartContext'
import { useContext } from 'react'

export function ProductInCart({ product, quantity }: ICartProduct) {
	const { cartProducts, plusProduct, removeProduct, minusProduct } =
		useContext(CartContext)

	const clickPlus = () => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.id,
		)
		plusProduct(cartProducts[prodIndex])
	}
	const clickRemove = () => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.id,
		)
		removeProduct(cartProducts[prodIndex])
	}
	const clickMinus = () => {
		const prodIndex = cartProducts.findIndex(
			value => value.product.id === product.id,
		)
		minusProduct(cartProducts[prodIndex])
	}
	return (
		<div
			key={product.id}
			className='border py-2 px-4 rounded grid grid-cols-8 h-[100px] mb-2 justify-center items-center '
		>
			<div className='col-span-1 flex place-content-center'>
				<img className='h-[80px]' src={product.image} alt='oops :(' />
			</div>
			<div className='mr-10 ml-10 font-bold col-span-3 overflow-hidden whitespace-nowrap lg:whitespace-normal'>
				<p>{product.title}</p>
			</div>
			<div className='m-auto font-bold font-weight-16 flex place-content-center'>
				${product.price}{' '}
			</div>
			<div className='flex justify-center'>
				<button
					className='inline-block h-[30px] w-[30px] mr-2 border-1 rounded-full bg-gray-400 hover:bg-gray-600 text-white'
					onClick={clickMinus}
				>
					-
				</button>
				<span className='inline-block '>{quantity}</span>
				<button
					className='inline-block h-[30px] w-[30px] ml-2 border-1 rounded-full bg-gray-400 hover:bg-gray-600 text-white'
					onClick={clickPlus}
				>
					+
				</button>
			</div>
			<div className='m-auto font-bold flex place-content-center'>
				${(product.price * quantity).toFixed(2)}{' '}
			</div>
			<div className='col-span-1 flex place-content-center'>
				<button
					className='border-1 py-2 px-4 rounded-lg bg-gray-300 hover:bg-gray-600 text-white'
					onClick={clickRemove}
				>
					X
				</button>
			</div>
		</div>
	)
}
