import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import ShoppingCart from './pages/ShoppingCart';
import { calculateTotals } from './features/productsSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {

  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.products.cartProducts)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartProducts])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/product/:id' element={<ProductPage/>} />
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
