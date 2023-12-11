import { useEffect, useState } from 'react'
import { Product } from '../components/Product'
import { IProduct } from '../types/models'
import { ProductService } from '../services/product.service'
import Header from '../components/Header'

export function MainPage() {
	const [products, setProducts] = useState<IProduct[]>([])

	useEffect(() => {
		const fetchData = async () => {
			const data = await ProductService.getAllProducts()
			setProducts(data)
		}
		fetchData()
	}, [])

	return (
		<>
			<Header />

			<main>
				<div className='container mx-auto max-w-5xl h-1/4 pt-5 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
					{products &&
						products.map(product => (
							<Product key={product.id} product={product} />
						))}
				</div>
			</main>
		</>
	)
}
