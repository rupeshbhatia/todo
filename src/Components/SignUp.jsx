import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
function SignUp() {
let navigate=useNavigate()
let[name,setName]=useState("")
 let[userName,setUsername]=useState("");
 let[password,setPassword]=useState("")
   let formdata=(e)=>{
     e.preventDefault();
 if (userName.length>0 && password.length>0){
     
     let obj={user:userName,password:password,name:name};
  localStorage.setItem("name",JSON.stringify(obj))
  alert("registration Successful")
  navigate("/login")
  setName(" ")
  setUsername(" ")
  setPassword(" ")
    }
  }
   return (
    <form onSubmit={formdata} className='bg-light col-lg-6 col-sm-12 p-4' style={{margin:"5rem auto"}}>
      <h1 className='text-center border-bottom  border-danger border-5 pb-2'>Todo App</h1>
      <br />
      <h3 className='text-success'>Sign Up</h3>
      <br />
        <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Enter Name' className='form-control' />
 <br />
     <input type="email" placeholder='Enter Email' onChange={(e)=>setUsername(e.target.value)} className='form-control' />
     <br />
     <input type="password"  placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)} className='form-control' />
     <br />
     <p>Already have Account?   <Link to="/login" className='text-decoration-none'>Login</Link></p>
     <input type="submit" value="Sign In" className=' btn btn-primary'/>
    </form>
   )}

export default SignUp