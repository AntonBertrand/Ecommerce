import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "../src/pages/Home.jsx"
import ProductPage from "./pages/ProductPage.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/product' element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
