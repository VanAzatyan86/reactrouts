import { useState } from "react"

export default function Increment({price,setPrice}){
    
    const[value,setValue]=useState(1)
    const [disable, setDisable]=useState(true)
     
    const decrement=()=>{
        if(value>=1){
            setValue(value+1)
            setDisable(false)
            setPrice(price*(value+1))
        }else{
            setDisable(true)
          
        }
        
      
    }
    const increment=()=>{
        if(value<=1){
            setDisable(true) 
        
        }else{
            setValue(value-1)
        }
        setPrice(price*(value-1))
    }
    return(
        <div>
        <div className="increment">
           <button  disabled={disable} onClick={increment}>-</button>
           <span>{value}</span>
           <button onClick={decrement}>+</button>
        </div>
        </div>
    )
}