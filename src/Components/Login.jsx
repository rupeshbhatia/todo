import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';

function Login() {
let navigate=useNavigate()

let[userName,setUsername]=useState("");
let[password,setPassword]=useState("")
let user=localStorage.getItem("name")

  let formdata=(e)=>{
    e.preventDefault();
    try{
    if(JSON.parse(user).user==userName && JSON.parse(user).password==password){
       alert("login Successful")
       navigate("/todoinput")
    }
    
    else{
      alert("signUp First")

    }}
    catch(err){
      alert("signUp First")
      navigate("/")
    }
    }
  return (
   <form onSubmit={formdata} className='bg-light w-50 p-4' style={{margin:"5rem auto"}}>
<h2>Log In</h2>
<br />
    <input type="email" placeholder='Enter Email' onChange={(e)=>setUsername(e.target.value)} className='form-control'/>
    <br />
    <input type="password" name="" id="" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} className='form-control' />
    <br />
         <p>Create Account  <Link to="/" className='text-decoration-none'>Sign Up</Link></p>
    
    <input type="submit" value="Log In" className=' btn btn-primary'/>
   </form>
  )
}

export default Login