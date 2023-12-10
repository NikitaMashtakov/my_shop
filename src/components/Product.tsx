import { IProduct } from '../types/models'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	const { cartProducts, addProductToCart } = useContext(CartContext)
	const isExistsInCart = cartProducts.some(i => i.product.id === product.id)
	return (
		<div
			key={product.id}
			className='border py-2 px-4 rounded flex flex-col object-fill  mb-2 hover:bg-gray-100 hover:text-green-500 '
		>
			<Link to={`/product/${product.id}`}>
				<div className='flex place-content-center'>
					<img
						src={product.image}
						className='object-scale-down h-48 w-96'
						alt='oops :('
					/>
				</div>
			</Link>

			<div className='text-center overflow-hidden whitespace-nowrap text-ellipsis'>
				{product.title}
			</div>
			<div className='font-bold self-center'>$ {product.price} </div>
			<button
				className='text-sm mt-3 bg-gray-100 rounded-xl w-3/4 mx-auto block p-1 hover:bg-green-200'
				onClick={() => !isExistsInCart && addProductToCart(product)}
			>
				{isExistsInCart ? 'Already in cart' : 'Add to cart'}
			</button>
		</div>
	)
}
