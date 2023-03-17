import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function Register(){
  const[name,setName]=useState()
  const[nameDirty,setNameDirty]=useState(false)
  const[nameError,setNameError]=useState("invalid first name")
  const[lastName,setLastName]=useState()
  const[lastNameDirty,setLastNameDirty]=useState(false)
  const[lastNameError,setLastNameError]=useState("invalid last name")
  const[userName,setUserName]=useState()
  const[userNameDirty,setUserNameDirty]=useState(false)
  const[userNameError,setUserNameError]=useState("invalid user name")
  const[emailDirty,setEmailDirty]=useState(false)
  const[emailError,setEmailError]=useState("invalid email")
  const[password,setPassword]=useState()
  const[passwordDirty,setPasswordDirty]=useState(false)
  const[passwordError,setPasswordError]=useState("invalid password")

const chamgeInput=(e)=>{
 switch(e.target.name){
    case "name":
     setNameDirty(true)
         break
    case "lastName":
     setLastNameDirty(true)
         break
    case "userName":
     setUserNameDirty(true)
         break
    case "email":
        setEmailDirty(true)
        break
    case "password":
        setPasswordDirty(true)  
        break
 }
}

const handleChangeName=(e)=>{
    setName(e.target.value)
    if(e.target.value.length<3){
        setNameError("invalid first name")
    }else{
        setNameError("")
    } 
}
const handleChangeLastName=(e)=>{
    setLastName(e.target.value)
    if(e.target.value.length<3){
        setLastNameError("invalid last name")
    }else{
        setLastNameError("")
    }
}
const handleChangeUserName=(e)=>{
    setUserName(e.target.value)
    if(e.target.value.length<7){
        setUserNameError("Username must start with a letter and must be 7-29 characters long!")
    }else{
        setUserNameError("")
    }
}
const handleChangePassword=(e)=>{
    setPassword(e.target.value)
    if(e.target.value.length<6){
        setPasswordError("Password must be 6-16 characters long!")
    }else{
        setPasswordError("")
    }
}
const sendInputValue=()=>{
    if(name.length>3 && lastName.length>3 && userName.length>7 && password.length>6){
       localStorage.setItem("user",JSON.stringify({
        name:name,
        lastName:lastName,
        userName:userName,
        password:password

       }))
    }else{
        setName("")
        setLastName("")
        setUserName("")
        setPassword("")
    }
}
    return(
        <div className="registerPart">
        <div className="register">
           <label htmlFor="">First Name</label>
           <input type="text" name="name"  placeholder="John"
           onBlur={(e)=>chamgeInput(e)}
           onChange={(e)=>handleChangeName(e)}/>
           {(nameDirty && nameError) && <div style={{color:"red"}}>{nameError}</div>}

           <label htmlFor="">Last Name</label>
           <input type="text" name="lastName" placeholder="Doe" 
           onBlur={(e)=>chamgeInput(e)}
           onChange={(e)=>handleChangeLastName(e)}/>
           {(lastNameDirty && lastNameError) && <div style={{color:"red"}}>{lastNameError}</div>}

           <label htmlFor="">Username </label>
           <input type="text" name="userName" placeholder="Doe 28"
           onBlur={(e)=>chamgeInput(e)}
           onChange={(e)=>handleChangeUserName(e)}/>
            {(userNameDirty && userNameError) && <div style={{color:"red"}}>{userNameError}</div>}
           
           
           <label htmlFor="">Email address </label>
           <input type="email" name="email" placeholder="Someone@example.com"
           onBlur={(e)=>chamgeInput(e)} />
           {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
          

           <label htmlFor="">Password</label>
           <input type="password" name="password" placeholder="*********"
           onBlur={(e)=>chamgeInput(e)}
           onChange={(e)=>handleChangePassword(e)}/>
            {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
         

           <button onClick={sendInputValue}><a href="">Register</a></button>
           <label htmlFor="">Already have an account? <NavLink to="/Login">Login</NavLink></label>
        </div>
        <div>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" />
        </div>
        </div>
    )
}