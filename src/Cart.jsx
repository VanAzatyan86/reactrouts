import { useState } from "react";
import Increment from "./Increment"


export default function Cart({cartProduct,setCartProduct}){
 const[price,setPrice]=useState()

const deleteProduct=(a)=>{
    setCartProduct(
        cartProduct.filter(item=>item.id!==a)
    )
}
    return(
        <div className="cartPage">
            <div><h1>Shopping Cart</h1></div>
            <div className="text">
                <h4>PRODUCT DETAILS</h4>
                <h4>PRICE</h4>
                <h4>QUANTITY</h4> 
                <h4>TOTAL</h4>
            </div>
            {
           cartProduct.map(elem=>{
            return(
                <div>
                <div className="cartProduct">
                    <img src={elem.image} alt="" />
                    <p>{elem.category}</p>
                     <h4>{elem.price} $</h4>
                     <Increment price={elem.price} setPrice={setPrice}/>
                     <span>{price}</span>
                     <button className="delete" onClick={()=>{deleteProduct(elem.id)}} >x</button>
                </div>
                </div>
            )
            
           })
           
         }
        </div>
    )
}