import { IProduct } from '../types/models'
import { Link } from 'react-router-dom'

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	return (
		<Link to={`/product/${product.id}`}>
			<div
				key={product.id}
				className='border py-2 px-4 rounded flex flex-col object-fill  mb-2 hover:bg-gray-100 hover:text-green-500 '
			>
				<div className='flex place-content-center'>
					<img
						src={product.image}
						className='object-scale-down h-48 w-96'
						alt='oops :('
					/>
				</div>

				<div className='text-center'>{product.title}</div>
				<div className='font-bold self-center'>$ {product.price} </div>
			</div>
		</Link>
	)
}
