import { Link } from 'react-router-dom'
import Cart from './Cart'

function Header() {
	return (
		<header>
			<nav className='h-[50px] flex justify-between px-5 bg-green-600 items-center text-white'>
				<Link to={'/'}>
					<img className='h-[40px]' src='./ouroboros.svg' alt='oops :('></img>
				</Link>
				<Link to={'/'}>
					<div>Магазин</div>
				</Link>
				<div>О нас</div>
				<div>Доставка</div>
				<Link to='/cart'>
					<Cart />
				</Link>
			</nav>
		</header>
	)
}

export default Header
