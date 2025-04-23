import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'
import AddProduct from './components/AddProduct'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'

function App() {

  return (
    <>
      <NavigationBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
