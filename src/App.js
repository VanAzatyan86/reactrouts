import React, { useState } from 'react';
import './App.scss';
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import Products from './Products';
import Cart from './Cart';
import OneProduct from './OneProduct';
import { Routes,Route } from 'react-router-dom';



function App() {
const[cartProduct,setCartProduct]=useState([])
const[spanValue,setSpanValue]=useState(0)


  const addProduct=(item)=>{
    setCartProduct([
      ...cartProduct,
       {
        title:item.title,
        id:item.id,
        image:item.image,
        price:item.price,
        category:item.category
       }
    ])
    setSpanValue(
      spanValue+1
    )
  }

  return (
    <div>
      <Nav spanValue={spanValue}/> 
     
    <Routes> 
         <Route path='/login' element={<Login/>}/>
         <Route path='/products' element={<Products addProduct={addProduct}/>}/> 
         <Route path='/products/:id' element={<OneProduct/>}/> 
         <Route path='/register' element={<Register/>}/>
         <Route path='/cart' element={<Cart cartProduct={cartProduct} setCartProduct={setCartProduct}/>}/>
    </Routes> 

   
      </div>
  
  );
}

export default App;
