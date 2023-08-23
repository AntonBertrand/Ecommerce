import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../src/pages/Home.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import ShoppingCart from './pages/ShoppingCart';
import CheckoutPage from './pages/CheckoutPage';
import { calculateTotals } from './features/productsSlice.tsx';
import { useEffect } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Profile from './pages/Profile';

function App() {

  const dispatch = useDispatch();
  const cartProducts = useSelector(state => state.products.cartProducts)
  const loading = useSelector(state => state.products.isLoading)

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartProducts])

  return (
    <div className="App">
      {loading && <LoadingSpinner/>}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/product/:id' element={<ProductPage/>} />
          <Route path='/cart' element={<ShoppingCart/>} />
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/Profile' element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
