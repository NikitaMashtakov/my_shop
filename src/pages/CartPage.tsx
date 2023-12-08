import { useContext } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import { CartContext } from "../context/CartContext"
import { ProductInCart } from "../components/ProductInCart"
import { ModalContext } from "../context/ModalContext"
import { Modal } from "../components/Modal"
import { Checkout } from "../components/Checkout"

const CartPage = () => {
    const {cartProducts} = useContext(CartContext)
    const {modal, open, close} = useContext(ModalContext)
    
    
    return (
        <>
            <Header />
            <Link to="/"><button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white">Back</button></Link>
            {modal && <Modal title="Оформить заказ" onClose={close}>
               <Checkout />
            </Modal>}
            <div>
                {cartProducts && cartProducts.map(product => <ProductInCart key={product.product.id} product={product.product} quantity={product.quantity} />)}
            </div>
            <button className="border-2 py-2 px-4 rounded-lg bg-slate-500 text-white" onClick={open}>Оформить заказ</button>
        </>
    )
}

export default CartPage