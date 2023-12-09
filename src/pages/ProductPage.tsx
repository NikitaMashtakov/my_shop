import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductService } from '../services/product.service'
import { IProduct } from '../types/models'
import { CartContext } from '../context/CartContext'
import Header from '../components/Header'

const ProductPage = () => {
	const { cartProducts, addProductToCart } = useContext(CartContext)
	const { id } = useParams()
	const [product, setProduct] = useState<IProduct>()
	useEffect(() => {
		if (!id) return
		const fetchData = async () => {
			const data = await ProductService.getById(Number(id))
			setProduct(data)
		}

		fetchData()
	}, [id])
	function handleAddToCartClick() {
		if (product) {
			addProductToCart(product)
			//console.log(cartProducts)
		}
		console.log(cartProducts)
	}

	return (
		<>
			<Header />
			<div
				key={product?.id}
				className='border py-2 px-4 rounded  flex-col  m-2 grid gap-4 grid-cols-2'
			>
				<div className='grow flex justify-center items-center'>
					<img src={product?.image} alt='oops :(' />
				</div>
				<div>
					<h2 className='font-bold'>{product?.title}</h2>
					<p>{product?.description}</p>
					<p className='font-bold'>${product?.price}</p>
					<button
						className='border-2 py-2 px-4 rounded-lg bg-slate-500 text-white'
						onClick={handleAddToCartClick}
					>
						Add to cart
					</button>
				</div>
			</div>
		</>
	)
}

export default ProductPage
