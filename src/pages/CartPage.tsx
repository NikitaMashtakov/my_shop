import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ProductInCart } from '../components/ProductInCart'
import { ModalContext } from '../context/ModalContext'
import { Modal } from '../components/Modal'
import { Checkout } from '../components/Checkout'
import Header from '../components/Header'

const CartPage = () => {
	const { cartProducts } = useContext(CartContext)
	const { modal, open, close } = useContext(ModalContext)

	return (
		<>
			<Header />
			{modal && (
				<Modal title='Checkout' onClose={close}>
					<Checkout />
				</Modal>
			)}
			<div className='container mx-auto max-v-2xl pt-2'>
				{cartProducts &&
					cartProducts.map(product => (
						<ProductInCart
							key={product.product.id}
							product={product.product}
							quantity={product.quantity}
						/>
					))}
			</div>
			<div className='flex place-content-center'>
				<button
					className='border-2 py-2 px-4 rounded-lg bg-slate-500 text-white'
					onClick={open}
				>
					Checkout
				</button>
			</div>
		</>
	)
}

export default CartPage
