
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export default function OneProduct(){
const {id}=useParams()
const[post,setPost]=useState()


useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res=>res.json())
    .then(data=>{setPost(data)})
},[id])

    return(
       <div className="oneProduct">
         {post && (
            <>
            <div>
                <img src={post.image} alt="" />
            </div>
            <div className="onlyText">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <h2>Price: {post.price} $</h2>
            </div>
           
            </>
         )
         }
       </div>
    )
}