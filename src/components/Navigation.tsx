//import {Link} from 'react-router-dom'

import Cart from "./Cart";

export function Navigation() {
    return (
        <nav className='h-[50px] flex justify-between px-5 bg-green-600 items-center text-white'>
            <img src="way.png"></img>
            <div>Магазин</div>
            <div>О нас</div>
            <div>Доставка</div>
            <Cart />
        </nav>
    )
}