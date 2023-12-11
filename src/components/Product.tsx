import { IProduct } from '../types/models'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	const { cartProducts, addProductToCart, plusProduct, minusProduct } =
		useContext(CartContext)
	const prodIndex = cartProducts.findIndex(
		value => value.product.id === product.id,
	)
	const clickPlus = () => {
		plusProduct(cartProducts[prodIndex])
	}
	const clickMinus = () => {
		minusProduct(cartProducts[prodIndex])
	}
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
				<div className='text-center overflow-hidden whitespace-nowrap text-ellipsis'>
					{product.title}
				</div>
				<div className='text-center font-bold mb-2'>$ {product.price} </div>
			</Link>
			{!isExistsInCart ? (
				<button
					className='text-sm h-[30px] bg-gray-300 rounded-xl w-2/6 mx-auto block p-1 hover:bg-green-200'
					onClick={() => addProductToCart(product)}
				>
					Add to cart
				</button>
			) : (
				<div className='flex justify-center'>
					<button
						className='inline-block h-[30px] w-[30px] mr-2 border-1 rounded-full bg-gray-400 hover:bg-gray-600 text-white'
						onClick={clickMinus}
					>
						-
					</button>
					<span className='inline-block '>
						{cartProducts[prodIndex].quantity}
					</span>
					<button
						className='inline-block h-[30px] w-[30px] ml-2 border-1 rounded-full bg-gray-400 hover:bg-gray-600 text-white'
						onClick={clickPlus}
					>
						+
					</button>
				</div>
			)}
		</div>
	)
}
