import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import ProductPage from '../pages/ProductPage'

function Router () {
    return (<BrowserRouter>
        <Routes>
            <Route element={<MainPage/>} path='/'/>
            <Route element={<ProductPage/>} path='/product/:id'/>
            <Route path='*' element={<div>Not found</div>} />
        </Routes>
    </BrowserRouter>)
}

export default Router