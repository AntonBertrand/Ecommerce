import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../src/pages/Home.jsx"
import Product from "../src/pages/Product.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/product' element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
