import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/contact/Contact.jsx'
import Cart from './components/cart/Cart.jsx'
import Login from './components/Login/Login.jsx'
import Signup from './components/signup/Signup.jsx'
import ProductDetails from './components/productdetails/ProductDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element ={<Home />} />
      <Route path='about' element ={<About />} />
      <Route path='contact' element ={<Contact />} />
      <Route path='cart' element ={<Cart />} />
      <Route path='login' element ={<Login/>} />
      <Route path='signup' element ={<Signup/>} />
      <Route path='productDetails' element ={<ProductDetails/>} />
    </Route >
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router} />

  </React.StrictMode>,
)
