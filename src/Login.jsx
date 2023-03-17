import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Login(){
    const[password,setPassword]=useState()
    const[email,setEmail]=useState()
    const[emeilDirty,setEmailDirty]=useState(false)
    const[emailError,setEmailError]=useState("Invalid email")
    const[passwordDirty,setPasswordDirty]=useState(false)
    const[passwordError,setPasswordError]=useState("Invalid password")

const changelogin=(e)=>{
    switch(e.target.name){
        case "email":
            setEmailDirty(true)
            break
            case "password":
                setPasswordDirty(true)
             break
    }
}
const handlChangePassword=(e)=>{
    setPassword(e.target.value)
    if(e.target.value.length<6){
        setPasswordError("incorrect password")
    }else{
        setPasswordError("")
    }
  }


    return(
        <div className="loginPart">
    
        <form action="" className="login">
         <h1>Welcome</h1>

         <label htmlFor="">Email address</label>
         <input type="email" name="email" value={email} placeholder="Sameone@example.com" 
           onBlur={(e)=>changelogin(e)}/>
         {(emeilDirty && emailError) && <div style={{color:"red"}}>{emailError}</div> }

         <label htmlFor="">Password </label>
         <input type="password" name="password" value={password} placeholder="*********"
           onBlur={(e)=>changelogin(e)} 
           onChange={e=>handlChangePassword(e)}/>
            {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div> }


         <button type="submit"> <a href="">Login</a> </button>
          <label htmlFor="">Don't have an account? <NavLink to="/Register">Register</NavLink></label>
        </form>
        <div>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        </div>
    )
}