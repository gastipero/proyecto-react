import NavBar from './components/header/navbar.js';
import { ItemListContainer } from './components/body/itemListContainer.js';
import './App.css';
import { ItemListDetail } from './components/body/itemDetailContainer'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Cart } from './components/header/cart'
import { EndCart } from './components/body/endCart.js';
import { CartContext } from './context/cartContext'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContext>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/category/:categoryName/item/:itemId' element={<ItemListDetail />} />
            <Route path='/item/:itemId' element={<ItemListDetail />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/endCart' element={<EndCart />} />
          </Routes>
        </CartContext>
      </BrowserRouter>

    </div>
  );
}

export default App;

