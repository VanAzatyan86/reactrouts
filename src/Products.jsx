import { useEffect, useState } from "react";
import Increment from "./Increment";
import { NavLink } from "react-router-dom";

export default function Products({addProduct,price,setPrice}){
    const[data,setData]=useState([])

   
     useEffect(()=>{
       fetch('https://fakestoreapi.com/products')
       .then(res=>res.json())
       .then(data=>{setData(data)})
     },[]);



    return(
      <div className="allProduct">
       {
        data.map(item=>{
            return(
                <div className="product">
                  <h2>{item.title}</h2>
                  <NavLink to={`/products/${item.id}`}><img src={item.image} alt="" /> </NavLink>
                                  
                  <p>{item.description}</p>
                  <h4>{item.price}</h4>
                   <Increment />
                   <div className="addToCart">
                      <button onClick={()=>addProduct(item)}>Add to Cart </button>
                    </div>

                </div>
            )
        })
       }
      </div>
    )
   
}